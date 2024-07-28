import type {CatObject} from "@/interface/CatObject";
import {onMounted, ref, watch} from "vue";
import {defineStore} from "pinia";



const initialAvailableList: CatObject[] = [
	{ name: 'John Cena', id: 1 },
	{ name: 'Joao Joao', id: 2 },
	{ name: 'Jean Rent', id: 3 },
	{ name: 'Gerard', id: 4 }
]

const initialCalledList: CatObject[] = [
	{ name: 'Domonic', id: 5 },
	{ name: 'Fatima Sahin', id: 6 },
	{ name: 'Johnson Glen', id: 7 }
]

const AVAILABLE_LIST_LS = 'AVAILABLE_LIST_LS';
const CALLED_LIST_LS = 'CALLED_LIST_LS';




export const useRosterLists = defineStore('rosterLists', () => {
	const availableList = ref<CatObject[]>(initialAvailableList);
	const calledList = ref<CatObject[]>(initialCalledList);
	
	
	// const updateAvailableList = (cats : CatObject[]) => {
	// 	availableList.value = cats;
	// }
	//
	// const updateCalledList = (cats : CatObject[]) => {
	// 	calledList.value = cats;
	// }
	
	const addCat = (cat: CatObject) => {
		availableList.value.push(cat);
	}
	
	watch(availableList,
		(newAvailableList) => {
			console.log('Available List Updated', newAvailableList);
			localStorage.setItem(AVAILABLE_LIST_LS, JSON.stringify(newAvailableList));
		}, {deep: true}
		)
	
	watch(calledList,
		(newCalledList) => {
			console.log('Called List Updated', newCalledList);
			localStorage.setItem(CALLED_LIST_LS, JSON.stringify(newCalledList));
		}, {deep: true})
	
	
	onMounted(() => {
		const availableListLS = localStorage.getItem(AVAILABLE_LIST_LS);
		if(availableListLS) {
			availableList.value = JSON.parse(availableListLS);
		}
		const calledListLS = localStorage.getItem(CALLED_LIST_LS);
		if (calledListLS) {
			calledList.value = JSON.parse(calledListLS);
		}
	});
	
	return { availableList, calledList, addCat }
});