start();


function start(){
    const starter = 16;
    document.querySelector('.slider').addEventListener('input', setGridSize);
    createSquares(starter);
    document.querySelector('.range-value').textContent = starter+"X"+starter;

    
}

function setGridSize(e){
    console.log(e.target.value);
    document.querySelector('.range-value').textContent = e.target.value+"X"+e.target.value;
    //const size = prompt("Give the size of each size of the grid(default is 16x16):");
    createSquares(e.target.value);
}

function createSquares(size){
    const container = document.querySelector('container');
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    const smallSize = 400/size;
    for(let i=0; i<size*size; i++){
        const newdiv = document.createElement('div');
        const container = document.querySelector('container');
        newdiv.style.height = `${smallSize}px`;
        newdiv.style.width = `${smallSize}px`;
        newdiv.style.marginTop = '0';
        newdiv.style.backgroundColor = 'white';
        newdiv.classList.add('square');
        container.appendChild(newdiv);
    }

    const squares = document.querySelectorAll('container div');
    squares.forEach(square => square.addEventListener('mouseover', changeColor));
}

function changeColor(e){
    e.target.style.backgroundColor = document.querySelector('#color').value;
}