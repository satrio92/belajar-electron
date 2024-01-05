const fs = require('fs');
const path = require('path');

const imageFolder = "./img"
const images = fs.readdirSync(imageFolder).filter(file => {
  return file.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)
})

window.addEventListener('DOMContentLoaded', () => {
  // Define imageContainer
  const imageContainer = document.getElementById('images');

  // Check if imageContainer exists before proceeding
  if (imageContainer) {
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = `./img/${image}`;

      //add style to each image
      imgElement.style.width = '200px'
      imgElement.style.borderRadius = '5px'
      imageContainer.appendChild(imgElement);
    });
  } else {
    console.error('Element with id "images" not found.');
  }
});