const functionalities = [
    {
        id: 1,
        name: 'Crie conexões',
        description: 'Lorem ipsum dolor sit amet, consecteteu.',
        imgUrl: 'assets/images/connections.svg'
    },
    {
        id: 2,
        name: '100% gratuito',
        description: 'Lorem ipsum dolor sit amet, consecteteu.',
        imgUrl: 'assets/images/free.svg'
    },
    {
        id: 3,
        name: 'Compartilhamento',
        description: 'Lorem ipsum dolor sit amet, consecteteu.',
        imgUrl: 'assets/images/sharing.svg'
    }
];

const funcContent = document.querySelector('.functionality__content');

functionalities.map(func => {
    const div = document.createElement('div');
    div.classList.add('functionality__item');
    funcContent.appendChild(div);

    const img = document.createElement('img');
    img.src = func.imgUrl;
    img.alt = func.name;
    div.appendChild(img);  

    const pTitle = document.createElement('p');
    pTitle.classList.add('functionality__item--title');
    pTitle.innerText = func.name;
    div.appendChild(pTitle);

    const divDescription = document.createElement('div');
    divDescription.classList.add('maxWidth210');
    div.appendChild(divDescription);

    const pDescription = document.createElement('p');
    pDescription.innerText = func.description;
    divDescription.appendChild(pDescription);
});