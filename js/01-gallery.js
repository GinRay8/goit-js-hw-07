import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

let modalInstance = null;

function galleryMarkup(items) {
    return items.map((item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
        </a>
    </li>`
    ).join("");
};

const addGalleryMarkup = galleryMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", addGalleryMarkup);

gallery.addEventListener('click', openImage);

function openImage(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
    modalInstance = instance;
    instance.show()
    document.addEventListener('keydown', closeModalOnEscape);
};

function closeModalOnEscape(event) {
    if (event.code === 'Escape') {
        modalInstance.close();
        document.removeEventListener('keydown', closeModalOnEscape);
    }
}
