import { stateManager } from './storage.js';
import { renderTasks } from './renderTasks.js';

const input = document.querySelector('.task-input');

export const onAddTask = () => {
  const newTaskText = input.value.trim();
  if (newTaskText) {
    stateManager.addTask(newTaskText);
    renderTasks(stateManager.state);
    input.value = '';
  }
};
