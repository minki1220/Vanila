const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

function changeBackground() {
  let currentImage;

  const savedUsername = localStorage.getItem("username");
  if (savedUsername !== null) {
    const filteredImages = images.slice(1);
    currentImage = getRandomImage(filteredImages);
  } else {
    currentImage = "1.jpeg";
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
