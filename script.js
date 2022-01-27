console.log("Hello");

// global variables
const container = document.getElementById("gridContainer");

// console log test variables

console.log(container);

// functions 

// get value from slider
// let sliderVal = document.getElementById('gridRange');
// let gridVal = sliderVal.value;

// console.log(gridVal);
// console.log(sliderVal);

// creates makeGrid function
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for(c = 0; c < (rows*cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);

    container.appendChild(cell).className = 'gridItem';
  };
};

// sizeGrid function

var size = '8';

function sizeGrid() {
  let colRow = document.getElementById('gridRange').value;
  document.getElementById('colValue').innerHTML = colRow;
  document.getElementById('rowValue').innerHTML = colRow;
  function changeSize(colRow) {
    size = colRow;
  }
  changeSize(colRow);
}

document.getElementById('gridRange').addEventListener('input', sizeGrid);

makeGrid(size, size);

// change color on hover function
let test = document.querySelectorAll("#gridContainer > div");
console.log(test);

// function
test.forEach((item) => {
  item.count = 0;
  item.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = '#353535';
  });
});

// range slider
// let range = document.querySelector('#gridRange');
// console.log(range);
