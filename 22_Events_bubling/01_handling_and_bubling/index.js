const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

function clearList() {
  eventsList.innerHTML = '';
}
clearList();

function addEvent(text, color) {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
}

const addEventDivBub = addEvent.bind(null, 'div', 'green');
const addEventDivHand = addEvent.bind(null, 'div', 'grey');
const addEventPBub = addEvent.bind(null, 'p', 'green');
const addEventPHand = addEvent.bind(null, 'p', 'grey');
const addEventSpanBub = addEvent.bind(null, 'span', 'green');
const addEventSpanHand = addEvent.bind(null, 'span', 'grey');

function attachHandlers() {
  rectDiv.addEventListener('click', addEventDivBub);
  rectDiv.addEventListener('click', addEventDivHand, true);

  rectP.addEventListener('click', addEventPBub);
  rectP.addEventListener('click', addEventPHand, true);

  rectSpan.addEventListener('click', addEventSpanBub);
  rectSpan.addEventListener('click', addEventSpanHand, true);
}

attachHandlers();

function removeHandlers() {
  rectDiv.removeEventListener('click', addEventDivBub);
  rectDiv.removeEventListener('click', addEventDivHand, true);

  rectP.removeEventListener('click', addEventPBub);
  rectP.removeEventListener('click', addEventPHand, true);

  rectSpan.removeEventListener('click', addEventSpanBub);
  rectSpan.removeEventListener('click', addEventSpanHand, true);
}

clearBtn.addEventListener('click', clearList);
attachHandlersBtn.addEventListener('click', attachHandlers);
removeHandlersBtn.addEventListener('click', removeHandlers);
