export const getItemsList = () => {
  const itemsList = document.querySelectorAll('.technology');
  console.dir(itemsList);
  return itemsList;
};

export const getItemsArray = () => {
  const itemsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(itemsArray);
  return itemsArray;
};

getItemsList();
getItemsArray();
