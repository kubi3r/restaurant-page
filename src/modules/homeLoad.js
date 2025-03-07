import burger from '../img/burger.jpg';

export default function() {
    const container = document.querySelector('div#content');
    container.textContent = '';

    const head = document.createElement('h1');
    head.textContent = `jimmy's restaurant`;

    const image = document.createElement('img');
    image.src = burger;
    image.classList.add('home-image');

    const quote = document.createElement('p');
    quote.textContent = 'wow this burger is really good -jimmy';


    container.appendChild(head);
    container.appendChild(image);
    container.appendChild(quote);
};