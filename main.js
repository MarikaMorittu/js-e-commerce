let remove = document.getElementById("minus");
let add = document.getElementById("plus");
let number = document.getElementById("number");

remove.addEventListener("click", () => {
  number.value--;
});

add.addEventListener("click", () => {
  number.value++;
});

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let imgThumbnail1 = document.getElementById("img-th1");
let imgThumbnail2 = document.getElementById("img-th2");
let imgThumbnail3 = document.getElementById("img-th3");
let imgThumbnail4 = document.getElementById("img-th4");

imgThumbnail1.addEventListener("click", () => {
  document
    .querySelector(".img-shose:not(.display-none)")
    .classList.add("display-none");
  img1.classList.remove("display-none");
});
imgThumbnail2.addEventListener("click", () => {
  document
    .querySelector(".img-shose:not(.display-none)")
    .classList.add("display-none");
  img2.classList.remove("display-none");
});
imgThumbnail3.addEventListener("click", () => {
  document
    .querySelector(".img-shose:not(.display-none)")
    .classList.add("display-none");
  img3.classList.remove("display-none");
});
imgThumbnail4.addEventListener("click", () => {
  document
    .querySelector(".img-shose:not(.display-none)")
    .classList.add("display-none");
  img4.classList.remove("display-none");
});
