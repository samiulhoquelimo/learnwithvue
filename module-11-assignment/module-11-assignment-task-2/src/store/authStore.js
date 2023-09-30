import {defineStore} from "pinia";
import {userStore} from "./userStore.js";

const authStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        login(email, password) {
            const store = userStore()
            const isEmailExist = store.isEmailExist(email)
            const isUserExist = store.isUserExist(email, password)
            if (isEmailExist && !isUserExist) {
                alert('User name and password mismatch')
                return
            }

            this.isAuthenticated = isUserExist
            if (!isUserExist) {
                alert('User not exist. Please register.')
            }
        },
        register(email, password) {
            const store = userStore()
            if (!store.isUserExist(email, password)) {
                store.addUser(email, password)
            }
            this.isAuthenticated = true
        },
        logout() {
            this.isAuthenticated = false
        },
    },
    persist: true,
});

export {authStore}