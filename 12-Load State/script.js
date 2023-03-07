const cardImage = document.querySelector('.card_image');
const cardTitle = document.querySelector('.card_title');
const cardDescription = document.querySelector('.card_description');

const renderCard = () => {
    cardTitle.textContent = 'Here goes the Card Title';
    cardDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quia suscipit placeat quod pariatur. Aliquid iste totam sed inventore veniam! Perspiciatis et voluptate modi culpa qui, vero autem obcaecati fugiat?';
    createImage();
    cardTitle.classList.remove('loading');
    cardDescription.classList.remove('loading');
    cardImage.classList.remove('loading');
};

function createImage() {
    const img = new Image();
    img.classList.add("image");
    img.setAttribute('alt', 'A randomly generated image');
    img.setAttribute('src', 'https://source.unsplash.com/random/380x200');
    cardImage.appendChild(img);
};

// TimeOut function to imitate getting images from server
setTimeout(() => {
    renderCard();
}, 5000);

// window.addEventListener('load', () => {
//     renderCard();
// })