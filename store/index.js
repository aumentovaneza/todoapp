export const state = () => ({
	tasks: [],
})

export const mutations = {
    ADD_TASK(state, task) {
		state.tasks = [{ content: task, done: false }, ...state.tasks];
    },
    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    DONE_TASK(state, task) {
        task.done = !task.done;
    },
    REMOVE_DONE_TASKS(state, task) {
        state.tasks = state.tasks.filter( task => !task.done)
    },
    REMOVE_ALL_TASKS(state, task) {
        state.tasks = [];
    }
}