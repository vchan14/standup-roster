import { defineStore } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useRosterLists } from '@/stores/useRosterLists'

export const useUser = defineStore('user', () => {
  const user = ref<any>(null);

  const setUser = (newUser:any): any => {
    user.value = newUser
  }

  const clearUser = () => {
    user.value = null
  }

  watch(
    user,
    async (newUser:any) => {
      localStorage.setItem('USER_LS', JSON.stringify(newUser))
      if (newUser) {
        const rosterListStore = useRosterLists()
        await rosterListStore.setLists(newUser?.uid)
      }
    },
    { deep: true }
  )

  onMounted(async () => {
    const userLS = localStorage.getItem('USER_LS')
    if (!userLS) return
    const paresedUser = JSON.parse(userLS)
    if (paresedUser) {
      user.value = paresedUser
    }
    const rosterListStore = useRosterLists()
    await rosterListStore.setLists(user.value?.uid)
  })

  return {
    user,
    setUser,
    clearUser
  }
})
