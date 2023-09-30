import {defineStore} from "pinia";

export const userStore = defineStore('users', {
    state: () => ({
        users: [],
    }),
    actions: {
        addUser(email, password) {
            this.users.push({
                id: Date.now(),
                email: email,
                password: password
            });
        },
        isUserExist(email, password) {
            return !!this.users.find(user => user.email === email && user.password === password);
        },
        isEmailExist(email) {
            return !!this.users.find(user => user.email === email);
        },
    },
    persist: true,
});