const container = document.querySelector(".container");

const gridSize = document.getElementById('gridSize');
const output = document.getElementById("output");

output.textContent = gridSize.value;
let sizeOfGrid = gridSize.value;

gridSize.oninput = function() {
    output.textContent = this.value;
    sizeOfGrid = this.value;
}

const create = document.getElementById('create');
const clean = document.getElementById('clean');
const black = document.getElementById('blackPen');
const rgb = document.getElementById('rgbPen');
const borders = document.getElementById('borders');
// const darken = document.getElementById('darken');

function createDivs (size) {
    for (let i = 0 ; i < size * size ; i++) {
        const div = document.createElement('div');
        div.className = 'cell';
        div.classList.add(`cellNumber${i}`);
        div.classList.add('border');
        container.appendChild(div);
    }
}

function clear () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function cellsSetup(pen) {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add(`${pen}`);
        });
    });
};

function cleanCells() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

window.addEventListener('load', () => {
    createDivs(sizeOfGrid);
    container.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sizeOfGrid}, 1fr)`;
    cellsSetup('black');
});

create.addEventListener('click', () => {
    clear();
    createDivs(sizeOfGrid);
    container.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sizeOfGrid}, 1fr)`;
    cellsSetup('black');
});

clean.addEventListener('click', () => {
    cleanCells();
})

black.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'black';
        });
    });
})

rgb.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            cell.style.backgroundColor = 'rgb('+red+', '+blue+', '+green+')';
        });
    });
})

// darken.addEventListener('click', () => {
//     let cells = document.querySelectorAll('.cell');
//     let currentOpacity;
//     cells.forEach((cell) => {
//         cell.addEventListener('mouseenter', () => {
//         });
//     });
// })

borders.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.toggle('border');
    });
})