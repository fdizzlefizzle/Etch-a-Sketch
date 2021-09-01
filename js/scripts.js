const sketchGrid = document.getElementById('sketch-grid')
const clearScreenBtn = document.getElementById('clear-screen');
const changeColorBtn = document.getElementById('change-color');
const goBtn = document.getElementById('grid-button')
const cell = document.getElementsByClassName("grid-cell")
let gridSize = document.getElementById('grid-size')

function gridCheck() {
    return (gridSize.value === "" || gridSize.value > 100) 
}

function makeGrid(gridSize) {
    if (!gridCheck()) {
        resetGrid()
        sketchGrid.style.setProperty('--grid-rows', gridSize.value);
        sketchGrid.style.setProperty('--grid-cols', gridSize.value);
        for (i = 0; i < gridSize.value*gridSize.value; i++) {
            let cell = document.createElement('div');
            sketchGrid.appendChild(cell).className = "grid-cell";
            sketchGrid.appendChild(cell).id = i+1;
        };
        for (i = 0; i < cell.length; i++) {
            cell[i].addEventListener('mouseover', 
            e => e.target.classList.add('color-cell')
        )
        }
    } else {
        gridSize.classList.add('grid-size-error')
    }
};

function resetGrid() {
    gridSize.classList.remove('grid-size-error')
    while (sketchGrid.hasChildNodes()) {
        sketchGrid.removeChild(sketchGrid.lastChild);
    } 
}

function clearScreen() {
    for (i = 0; i < cell.length; i++) {
        cell[i].classList.remove('color-cell')
    }
}