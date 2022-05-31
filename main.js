// dichiarazione variabili
let remove = document.getElementById("minus");
let add = document.getElementById("plus");
let number = document.getElementById("number");
// plus and minus
remove.addEventListener("click", () => {
  if (number.value > 0) {
    number.value--;
  }
});

add.addEventListener("click", () => {
  number.value++;
});
// array
const arrayImg = [
  "./img/image-product-1-thumbnail.jpg",
  "./img/image-product-2-thumbnail.jpg",
  "./img/image-product-3-thumbnail.jpg",
  "./img/image-product-4-thumbnail.jpg",
];
// dichiarazione variabili
let containerImage = document.querySelector(".container__thumbnail__image");

let bigImage = document.querySelector(".img__product");

for (i = 0; i < arrayImg.length; i++) {
  let img = document.createElement("img");
  img.src = arrayImg[i];
  containerImage.append(img);
  img.classList.add("img-thumbnail");
}
const img = document.querySelectorAll(".img-thumbnail");
img.forEach((e) => {
  e.addEventListener("click", () => {
    bigImage.src = e.src.replace("-thumbnail", "");
  });
});
