import { stateManager } from './storage.js';
import { renderTasks } from './renderTasks.js';

export const onSetDone = e => {
  if (e.target.matches('input[type="checkbox"]')) {
    const parentItemId = e.target.closest('.list__item').dataset.id;
    stateManager.setDone(parentItemId);
    renderTasks(stateManager.state);
  }
};
