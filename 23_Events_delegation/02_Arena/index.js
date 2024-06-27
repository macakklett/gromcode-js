const boardInfo = document.querySelector('.board__selected-seat');
const arena = document.querySelector('.arena');
let colSectors = 3;
let colLines = 10;
let colSeats = 10;

const createSeat = seatNumber => `
  <div class="sector__seat" data-number-seat="${seatNumber}"></div>
`;

const createLine = lineNumber => {
  let seats = '';
  for (let i = 1; i <= colSeats; i += 1) {
    seats += createSeat(i);
  }

  return `
    <div class="sector__line" data-number-line="${lineNumber}">
      ${seats}
    </div>
  `;
};

const createSector = sectorNumber => {
  let lines = '';
  for (let i = 1; i <= colLines; i += 1) {
    lines += createLine(i);
  }

  return `
    <div class="sector" data-number-sector="${sectorNumber}">
      ${lines}
    </div>
  `;
};

const createArena = () => {
  let sectors = '';
  for (let i = 1; i <= colSectors; i += 1) {
    sectors += createSector(i);
  }

  arena.innerHTML = sectors;
};

createArena();
arena.addEventListener('click', e => {
  const sector = e.target.closest('.sector').dataset.numberSector;
  const line = e.target.closest('.sector__line').dataset.numberLine;
  const seat = e.target.dataset.numberSeat;

  boardInfo.textContent = `S ${sector} - L ${line} - S ${seat}`;
});
