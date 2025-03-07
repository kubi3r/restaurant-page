export default function() {
    const container = document.querySelector('div#content');
    container.textContent = '';

    const head = document.createElement('h1');
    head.textContent = 'About';

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `jimmy's restaurant was founded in 1284 when the first French armies under King Philip III (the Bold) and his 14-year-old son Charles of Valois entered Roussillon. They included 16,000 cavalry, 17,000 crossbowmen, and 100,000 infantry, along with 100 ships in south French ports. Though they had the support of James II, ruler of Majorca, the local populace rose against them.`;

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = '(jimmy does not know history he copied this from wikipedia)';

    const paragraph3 = document.createElement('p');
    paragraph3.textContent = `anyways jimmy's restaurant the best EVER food, and a great variety of options, such as: Burger`;

    container.appendChild(head);
    container.appendChild(paragraph1);
    container.appendChild(paragraph2);
    container.appendChild(paragraph3);
};