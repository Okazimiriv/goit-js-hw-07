import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector('.gallery');
const cardsMarkup = createGaleryMarkup(galleryItems);
let instance;

galleryItemsContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryItemsContainer.addEventListener('click', openGalleryModal);


function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}

function openGalleryModal(evt) { 
  const { target } = evt;
  evt.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  
const isGalleryImageEl = target.classList.contains('gallery__image');

  if (!isGalleryImageEl) {
    return;
  }

const imgDataSource = target.dataset.source
const currentItem = galleryItems.find(({original}) => original === imgDataSource)  
  
  instance = basicLightbox.create(`
    <img src="${currentItem.preview}">
`); 
   
  instance.show(); 
}

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {    
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  };
