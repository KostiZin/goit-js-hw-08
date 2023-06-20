// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

const ulEl = document.querySelector(`.gallery`);

// Create a new markup

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
);

// Delete bullets

ulEl.style.listStyle = 'none';

// Add a new markup to HTML

ulEl.insertAdjacentHTML(`beforeend`, markup.join(``));

// We do not add eventListener to SimpleLightbox !!!!!!! only to apply preventDefault

ulEl.addEventListener('click', evt => {
  evt.preventDefault();
});

// Add settings from the SimpleLightbox

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
