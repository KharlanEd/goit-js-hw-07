import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const cardMarcup = createCardMarcup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend',cardMarcup)

    function createCardMarcup(gallery) {
    return gallery.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');
};

containerGallery.addEventListener('click', onClick)

function onClick(evt) {
    evt.preventDefault(); 
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: `alt`
    })
    
}



