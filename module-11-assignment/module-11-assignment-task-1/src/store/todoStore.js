import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        tasks: [],
    }),
    actions: {
        addTask(taskName) {
            this.tasks.push({
                id: Date.now(), name: taskName, done: false,
            });
        },
        removeTask(taskId) {
            const index = this.tasks.findIndex((task) => task.id === taskId);
            if (index !== -1) {
                this.tasks.splice(index, 1);
            }
        },
        toggleTaskStatus(taskId) {
            this.tasks = this.tasks.map(task => {
                if (task.id == taskId) {
                    task.done = !task.done;
                }
                return task
            });
        },
    },
    persist: true,
});
