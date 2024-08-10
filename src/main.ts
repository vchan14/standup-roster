import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {onAuthStateChanged} from "firebase/auth";
import {useUser} from "@/stores/useUser";
import {fireAuth} from "@/firebase/fireAuth";

const app = createApp(App)
app.use(createPinia())
app.mount('#app')



onAuthStateChanged(fireAuth, (user) => {
	const userStore = useUser();
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// userStore.setUser(user);
		//
		// console.log('onAuthStateChanged', user.uid);
		// ...
	} else {
		// User is signed out
		userStore.clearUser();
		// ...
	}
});
