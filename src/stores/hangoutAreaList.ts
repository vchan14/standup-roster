import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CatObject } from '@/interface/CatObject';

const HANG_OUT_LIST = 'hangoutList'

const initialHangoutList: CatObject[] = [
	{ name: 'Domonic', id: 5 },
	{ name: 'Fatima Sahin', id: 6 },
	{ name: 'Johnson Glen', id: 7 }
]

export const useCatHangoutListStore = defineStore(HANG_OUT_LIST, (initialList: CatObject[] = initialHangoutList) => {
	const hangoutList = ref<CatObject[]>(initialList)
	
	const addHangoutCat = (cat: CatObject) => {
		hangoutList.value.push(cat)
	}
	
	const removeHangoutCat = (cat: CatObject) => {
		hangoutList.value = hangoutList.value.filter((c) => c.id !== cat.id)
	}
	
	return { hangoutAreaList: hangoutList, addHangoutCat, removeHangoutCat }
})