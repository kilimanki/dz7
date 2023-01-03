import { galleryItems } from "./gallery-items.js";
// Change code below this line
const blockImg = document.querySelector(".gallery");
const listItemsGallery = listMarkup(galleryItems);
function listMarkup(items) {
  return items
    .map(
      (item) =>
        `<li>  <a class="gallery__item" href="${item.original}" " >
      <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      
    />
  </a></li>`
    )
    .join("");
}
blockImg.insertAdjacentHTML("afterbegin", listItemsGallery);
const lightBoxSetting = {
  captionsData: "alt",
  captionDelay: 250,
};
console.log(lightBoxSetting.captionsData);
var lightbox = new SimpleLightbox(".gallery a", lightBoxSetting);
