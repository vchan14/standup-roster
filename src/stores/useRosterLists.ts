import type { CatObject } from '@/interface/CatObject'
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useUser } from '@/stores/useUser'
const {fireAddUserList, fireGetUserListById} = require('@/firebase/fireFirestore.js');

const initialAvailableList: CatObject[] = [
  { name: 'Alice', id: 1 },
  { name: 'Bob', id: 2 }
]

const initialCalledList: CatObject[] = [
  { name: 'Lisa', id: 5 },
  { name: 'Sok', id: 6 },
]

const AVAILABLE_LIST_LS = 'AVAILABLE_LIST_LS'
const CALLED_LIST_LS = 'CALLED_LIST_LS'

export const useRosterLists = defineStore('rosterLists', () => {
  const availableList = ref<CatObject[]>([])
  const calledList = ref<CatObject[]>([])

  const deleteCat = (id: number) => {
    availableList.value = availableList.value.filter((cat) => cat.id !== id)
    calledList.value = calledList.value.filter((cat) => cat.id !== id)
  }

  const addListToFirebase = async () => {
    const userStore = useUser()
    const userUid = userStore.user?.uid
    if (userUid) {
      await fireAddUserList(userUid, availableList.value, calledList.value)
    }
  }

  const addCat = (cat: CatObject) => {
    availableList.value.push(cat)
  }

  const resetLists = () => {
    availableList.value = initialAvailableList
    calledList.value = initialCalledList
  }

  const getNextCat = () => {
    // randomly pick a cat from the available list
    // if available list is empty returns null
    if (availableList.value.length === 0) {
      return null
    }
    const randomIndex = Math.floor(Math.random() * availableList.value.length)
    return availableList.value[randomIndex]
  }

  const setLists = async (uid : undefined|number) => {
    // use local storage if not log in
    if (uid) {
      console.warn('setLists', uid)
      // use firebase if log in
      const document = await fireGetUserListById(uid)
      if (document) {
        console.log('document', document)
        if (document.availableList && document.calledList) {
          availableList.value = document.availableList
          calledList.value = document.calledList
          return
        }
      }
    }
    const availableListLS = localStorage.getItem(AVAILABLE_LIST_LS)
    if (availableListLS) {
      availableList.value = JSON.parse(availableListLS)
    }
    const calledListLS = localStorage.getItem(CALLED_LIST_LS)
    if (calledListLS) {
      calledList.value = JSON.parse(calledListLS)
    }
  }

  watch(
    availableList,
    async (newAvailableList) => {
      if (!newAvailableList) return
      console.log('Available List Updated', newAvailableList)
      localStorage.setItem(AVAILABLE_LIST_LS, JSON.stringify(newAvailableList))
      await addListToFirebase()
    },
    { deep: true }
  )

  watch(
    calledList,
    async (newCalledList) => {
      if (!newCalledList) return
      console.log('Called List Updated', newCalledList)
      localStorage.setItem(CALLED_LIST_LS, JSON.stringify(newCalledList))
      await addListToFirebase()
    },
    { deep: true }
  )

  return { availableList, calledList, addCat, deleteCat, resetLists, getNextCat, setLists }
})
