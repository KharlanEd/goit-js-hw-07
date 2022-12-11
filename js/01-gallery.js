import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const cardMarcup =  galleryItems.map(({preview, original,description}) => {
      return  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
   
containerGallery.insertAdjacentHTML('beforeend',cardMarcup)

containerGallery.addEventListener('click',onClick)
function onClick(evt) {
  evt.preventDefault();
  const imgElement = evt.target.classList.contains('gallery__image');
  if (!imgElement) {
    return
  }
  const selectedImage = evt.target.getAttribute('data-source')
  const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`);
  instance.show()
  document.addEventListener("keydown", evt => {
   
    if (evt.key === 'Escape') {
      instance.close()
    }
    
})

}



