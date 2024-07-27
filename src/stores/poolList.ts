import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CatObject } from '@/interface/CatObject'

const POOL_LIST = 'catPoolList'

const initialCatPoolList: CatObject[] = [
	{ name: 'John Cena', id: 1 },
	{ name: 'Joao Joao', id: 2 },
	{ name: 'Jean Rent', id: 3 },
	{ name: 'Gerard', id: 4 }
]

export const usePoolListStore = defineStore(POOL_LIST, (initialList: CatObject[] = initialCatPoolList) => {
	const catPoolList = ref<CatObject[]>(initialList)
	
	const addCat = (cat: CatObject) => {
		catPoolList.value.push(cat)
	}
	
	const removeCat = (cat: CatObject) => {
		catPoolList.value = catPoolList.value.filter((c) => c.id !== cat.id)
	}
	return { catPoolList, addCat, removeCat }
})