import { galleryItems } from './gallery-items.js';
// Change code below this line

// import { supportItems } from './support_ukraie_items';

// const galleryItemsContainer = document.querySelector('.swiper-wrapper');
// const fundsMarkup = createFundsMarkup(supportItems);

// galleryItemsContainer.insertAdjacentHTML('beforeend', createFundsMarkup);

// function numberFounds(arr) {
//   for (let i = 0; i < arr.length; i += 1) {}
// }
// numberFounds(supportItems);

// function createFundsMarkup(supportItems) {
//   console.log(supportItems.children);

//   return supportItems
//     .map(({ title, url, img }) => {
//       return `
//             <li class="support_gallery_item swiper-slide">
//               <a class="support_gallery_link link" href="${url}" title="${title}">
//                 <svg class="support_gallery_link_svg" height="20">
//                 <use href="${img}"></use>
//                 </svg>
//               </a>
//             </li>
//             `;
//     })
//     .join('');
// }

// console.log(supportItems);

// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   direction: 'vertical',
//   loop: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
// });




















// console.log(galleryItems);

// const galleryItemsContainer = document.querySelector('.gallery');
// const cardsMarkup = createGaleryMarkup(galleryItems);
// let instance;

// galleryItemsContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// galleryItemsContainer.addEventListener('click', openGalleryModal);


// function createGaleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
// <li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>
//     `;
//     })
//     .join('');
// }

// function openGalleryModal(evt) { 
//   const { target } = evt;
//   evt.preventDefault();
//   window.addEventListener('keydown', onEscKeyPress);
  
// const isGalleryImageEl = target.classList.contains('gallery__image');

//   if (!isGalleryImageEl) {
//     return;
//   }

// const imgDataSource = target.dataset.source
// const currentItem = galleryItems.find(({original}) => original === imgDataSource)  
  
//   instance = basicLightbox.create(`
//     <img src="${currentItem.preview}">
// `); 
   
  instance.show(); 
}

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {    
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  };
