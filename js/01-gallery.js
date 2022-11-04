import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console
const gallery = document.querySelector(".gallery");
console.log(basicLightbox);

const markupGallery = createImgMarkup(galleryItems);

gallery.innerHTML = markupGallery;

gallery.addEventListener(`click`, onClick);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a>
</div>
`;
}).join("");

}

function onClick (evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== `IMG`){
        return;
        }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}"
        alt = "${evt.target.alt}"
        width="800" height="600">`)
instance.show()

}
