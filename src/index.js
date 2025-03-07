import homeLoad from './modules/homeLoad.js';
import menuLoad from './modules/menuLoad.js';
import aboutLoad from './modules/aboutLoad.js';
import './styles.css';

homeLoad();


let selected;

function changeSelection(clickedEl, prevEl) {
    selected = clickedEl;

    clickedEl.style.outline = '2px solid white';
    if (prevEl) {
        prevEl.style.outline = 'none';
    };
};


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