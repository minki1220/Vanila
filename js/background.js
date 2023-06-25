const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

function changeBackground() {
  const savedUsername = localStorage.getItem("username");
  let currentImage;

  if (savedUsername !== null) {
    currentImage = getRandomImage(images);
  } else {
    currentImage = getRandomImage(images.slice(1));
  }

  document.body.style.backgroundImage = `url(img/${currentImage})`;
}

function getRandomImage(imagesArray) {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

window.addEventListener("load", function () {
  changeBackground();
});
