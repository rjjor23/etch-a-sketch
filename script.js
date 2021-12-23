console.log("Hello");

const container = document.getElementById("gridContainer");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for(c = 0; c < (rows*cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);

    container.appendChild(cell).className = 'gridItem';
  };
};

makeGrid(4,4);