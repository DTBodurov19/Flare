const addButton = document.querySelector('.addButton');
const addMenu = document.querySelector('.add-menu');
let addMenuShown = false;

addButton.addEventListener('click', () =>{
    if(addMenuShown) {
        addMenu.style.display = 'none';
        addMenuShown = false;
    } else {
        addMenu.style.display = 'flex';
        addMenuShown = true;
    }

});