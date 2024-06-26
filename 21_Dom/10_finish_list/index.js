export const finishList = () => {
  const createListElement = text => {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  };

  const list = document.querySelector('.list');
  const specialListItem = document.querySelector('.special');

  list.prepend(createListElement(1));
  list.append(createListElement(8));
  specialListItem.before(createListElement(4));
  specialListItem.after(createListElement(6));
};

finishList();
