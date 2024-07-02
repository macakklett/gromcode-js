export const getTasksFromStorage = () => JSON.parse(localStorage.getItem('tasksList')) || [];

export const stateManager = {
  initialState: getTasksFromStorage(),

  get state() {
    return this.initialState;
  },

  setDone(id) {
    const taskId = Number(id);
    this.initialState = this.initialState.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task,
    );

    localStorage.setItem('tasksList', JSON.stringify(this.initialState));
  },

  addTask(text) {
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };
    this.initialState = [newTask, ...this.initialState];
    localStorage.setItem('tasksList', JSON.stringify(this.initialState));
  },
};
