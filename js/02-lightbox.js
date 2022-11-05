import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markupGallery = createImgMarkup(galleryItems);

gallery.innerHTML = markupGallery;

gallery.addEventListener(`click`, onClick);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
}).join("");

}

console.log(createImgMarkup)

console.log(SimpleLightbox)

function onClick (evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== `IMG`){
        return;
        }

new SimpleLightbox('.gallery a', {
  captions:	true,
  captionSelector:`img`,
  captionType: 'attr',
  captionsData: `alt`,
  captionPosition: 'bottom',
  captionDelay: 250,
 });

}