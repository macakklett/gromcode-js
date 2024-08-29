type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: 'ordered' | 'completed';
};

let nextPizzaId: number = 1;
let cashInRegister: number = 100;
let orderId: number = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 10 },
  { id: nextPizzaId++, name: 'Papperoni', price: 12 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 11 },
  { id: nextPizzaId++, name: 'Vegie', price: 8 },
];

const orderQueue: Order[] = [];

const addNewPizza = (pizzaObj: Omit<Pizza, 'id'>): Pizza => {
  const pizza: Pizza = { id: nextPizzaId++, ...pizzaObj };
  menu.push(pizza);
  return pizza;
};

export const getPizzaDetail = (identifier: number | string): Pizza | undefined => {
  if (typeof identifier === 'number') {
    return menu.find(pizza => pizza.id === identifier);
  } else if (typeof identifier === 'string') {
    return menu.find(pizza => pizza.name === identifier);
  } else {
    throw new TypeError('Parameter "identefer" must be either a number or a string');
  }
};

const placeOrder = (pizzaName: string): Order | undefined => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} doesn't exist in the menu`);
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = { id: orderId++, pizza: selectedPizza, status: 'ordered' };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId: number): Order | undefined => {
  const order = orderQueue.find(order => order.id === orderId);
  if (!order) {
    console.error(`${orderId} doesn't exist in the orderQueue`);
    return;
  }
  order.status = 'completed';
  return order;
};

const addToArray = <T>(array: T[], item: T): T[] => {
  array.push(item);
  return array;
};

addToArray<Pizza>(menu, { id: nextPizzaId++, name: 'Chicken', price: 12 });
addToArray<Order>(orderQueue, { id: orderId++, pizza: menu[2], status: 'ordered' });

// addNewPizza({ name: 'Fill', price: 10 });
// addNewPizza({ name: 'three cheeses', price: 11 });
// addNewPizza({ name: 'Cheese', price: 8 });
