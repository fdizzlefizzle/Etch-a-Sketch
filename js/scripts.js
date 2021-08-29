const sketchGrid = document.getElementById('sketch-grid')
const clearScreenBtn = document.getElementById('clear-screen');
const changeColorBtn = document.getElementById('change-color');
const gridSize = document.getElementById('grid-input');
const goBtn = document.getElementById('go');

function makeGrid(gridSize) {
    sketchGrid.style.setProperty('--grid-rows', gridSize);
    sketchGrid.style.setProperty('--grid-cols', gridSize);
    for (i = 0; i < gridSize*gridSize; i++) {
        let cell = document.createElement('div');
        sketchGrid.appendChild(cell).className = "grid-cell";
    };
};

makeGrid(16)
