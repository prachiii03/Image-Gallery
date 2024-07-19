let images = document.querySelectorAll("img");
let photo = document.getElementById("photo");
let image = document.getElementById("firstimg");
let closebtn = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openimage(`images/h${index}.jpg`);
  });
});

function openimage(pic) {
  photo.style.display = "flex";
  image.src = pic;
}

let currentIndex = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showImage(index) {
  setTimeout(() => {
    image.src = images[index].src;
  }, 40);
}

closebtn.addEventListener("click", () => (photo.style.display = "none"));

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  } else if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
});

// Initial display
showImage(currentIndex);
