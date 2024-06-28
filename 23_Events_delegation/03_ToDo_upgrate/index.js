const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const stateManager = {
  initialState: tasks.map((task, index) => ({ id: index, ...task })),

  get state() {
    return this.initialState;
  },

  setDone(id) {
    const taskId = Number(id);
    this.initialState = this.initialState.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task,
    );
  },

  addTask(text) {
    const newTask = {
      id: this.initialState.length,
      text,
      done: false,
    };
    this.initialState = [newTask, ...this.initialState];
  },
};

const listElem = document.querySelector('.list');
const input = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      listItemElem.setAttribute('data-id', id);

      return listItemElem;
    });

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

renderTasks(stateManager.state);

const setDone = e => {
  if (e.target.matches('input[type="checkbox"]')) {
    const parentItemId = e.target.closest('.list__item').dataset.id;
    stateManager.setDone(parentItemId);
  }

  renderTasks(stateManager.state);
};

const addTask = () => {
  const newTaskText = input.value.trim();
  if (newTaskText) {
    stateManager.addTask(newTaskText);
    renderTasks(stateManager.state);
    input.value = '';
  }
};

listElem.addEventListener('click', setDone);
createTaskBtn.addEventListener('click', addTask);
