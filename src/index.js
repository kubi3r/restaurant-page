import homeLoad from './modules/homeLoad.js';
import menuLoad from './modules/menuLoad.js';
import aboutLoad from './modules/aboutLoad.js';
import './styles.css';


function changeSelection(add, remove) {
    selected = add;

    add.style.outline = '2px solid white';
    if (remove) {
        remove.style.outline = 'none';
    };
};

homeLoad();
let selected = document.querySelector('#home');
changeSelection(selected, null)

document.querySelector('button#home').addEventListener('click', (e) => {
    changeSelection(e.target, selected);
    homeLoad();
});

document.querySelector('button#menu').addEventListener('click', (e) => {
    changeSelection(e.target, selected);
    menuLoad();
});

document.querySelector('button#about').addEventListener('click', (e) => {
    changeSelection(e.target, selected);
    aboutLoad();
});