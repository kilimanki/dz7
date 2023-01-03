import { galleryItems } from "./gallery-items.js";
// Change code below this line
const blockImg = document.querySelector(".gallery");
const listItemsGallery = listMarkup(galleryItems);

function listMarkup(items) {
  return items
    .map(
      (item) =>
        `<li>  <a class="gallery__link" href="${item.original}" onclick="return false;" >
      <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a></li>`
    )
    .join("");
}
blockImg.insertAdjacentHTML("afterbegin", listItemsGallery);
blockImg.onclick = (e) => {
  if (e.target.nodeName !== "IMG") return;
  else {
    basicLightbox
      .create(
        `<img
      class="gallery__image"
      src="${e.target.dataset.source}"
      data-source="${e.target.dataset.source}"
      alt="${e.target.alt}"
    />`
      )
      .show();
  }
};
blockImg.addEventListener("keydown", (e) => {
  if ((e.keycode = 27)) {
    document.querySelector(".basicLightbox").remove(
      `<img
      class="gallery__image"
      src="${e.target.dataset.source}"
      data-source="${e.target.dataset.source}"
      alt="${e.target.alt}"
    />`
    );
  }
});
