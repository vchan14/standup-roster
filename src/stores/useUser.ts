import {defineStore} from "pinia";
import {onMounted, ref, watch} from "vue";


export const useUser = defineStore('user', () => {
	const user = ref<UserObject | null>(null)

	const setUser = (newUser) => {
		user.value = newUser
	}

	const clearUser = () => {
		user.value = null
	}

	watch(
		user,
		(newUser) => {
			console.log('User Updated', newUser)
			localStorage.setItem('USER_LS', JSON.stringify(newUser))
		},
		{ deep: true }
	)

	onMounted(() => {
		const userLS = localStorage.getItem('USER_LS')
		if (userLS) {
			user.value = JSON.parse(userLS)
		}
	})

	return {
		user,
		setUser,
		clearUser,
	}
})