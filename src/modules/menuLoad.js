import burger from '../img/burger.jpg';

export default function() {
    const container = document.querySelector('div#content');
    container.textContent = '';

    const head = document.createElement('h1');
    head.textContent = 'Menu';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const item1 = document.createElement('div');
    item1.classList.add('menu-item');

    const item1Img = document.createElement('img');
    item1Img.src = burger;
    item1Img.classList.add('menu-item-image');
    item1.appendChild(item1Img);

    const item1Title = document.createElement('div');
    item1Title.textContent = 'Burger';
    item1Title.classList.add('menu-item-title');
    item1.appendChild(item1Title);

    menuContainer.appendChild(item1);

    const item2 = document.createElement('div');
    item2.classList.add('menu-item');

    const item2Img = document.createElement('img');
    item2Img.src = burger;
    item2Img.classList.add('menu-item-image');
    item2.appendChild(item2Img);

    const item2Title = document.createElement('div');
    item2Title.textContent = 'Burger';
    item2Title.classList.add('menu-item-title');
    item2.appendChild(item2Title);

    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);

    container.appendChild(head);
    container.appendChild(menuContainer);
};