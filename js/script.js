const container = document.querySelector(".container");

function createDivs (size) {
    for (let i = 0 ; i < size * size ; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

function clear () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const gridSize = document.getElementById('gridSize');
const output = document.getElementById("output");

output.textContent = gridSize.value;
let sizeOfGrid = gridSize.value;

gridSize.oninput = function() {
    output.textContent = this.value;
}

const create = document.getElementById('create');

create.addEventListener('click', () => {
    clear();
    createDivs(sizeOfGrid);
    container.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sizeOfGrid}, 1fr)`;
});