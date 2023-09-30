import {defineStore} from "pinia";

const authStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        authenticate() {
            this.isAuthenticated = true
        },
        logout() {
            this.isAuthenticated = false
        },
    },
    persist: true,
});

export {authStore}