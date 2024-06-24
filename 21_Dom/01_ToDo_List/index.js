const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const list = document.querySelector('.list');

  list.innerHTML = '';

  tasksList.forEach(({ text, done }) => {
    const listItem = document.createElement('li');
    const listItemCheckBox = document.createElement('input');

    listItemCheckBox.setAttribute('type', 'checkbox');
    listItemCheckBox.checked = done;
    listItemCheckBox.classList.add('list__item-checkbox');

    listItem.append(listItemCheckBox, text);
    listItem.classList.add('list__item');
    if (done) {
      listItem.classList.add('list__item_done');
    }

    list.append(listItem);
  });
};

renderTasks(tasks);
