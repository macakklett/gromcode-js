import { stateManager } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { onSetDone } from './changeDone.js';
import { onAddTask } from './addTask.js';

const listElem = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');

renderTasks(stateManager.state);

listElem.addEventListener('click', onSetDone);
createTaskBtn.addEventListener('click', onAddTask);

const onChangeStorage = e => {
  if (e.key === 'tasksList') {
    stateManager.initialState = JSON.parse(e.newValue);
    renderTasks(stateManager.state);
  }
};

window.addEventListener('storage', onChangeStorage);
