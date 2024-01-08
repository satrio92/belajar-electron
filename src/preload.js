const fs = require('fs');
const path = require('path');

// const imageFolder = "./src/assets/img"
const imageFolder = path.join(__dirname, 'assets', 'img')
const images = fs.readdirSync(imageFolder).filter(file => {
  return file.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)
})

window.addEventListener('DOMContentLoaded', () => {
  // Define imageContainer
  const imageContainer = document.getElementById('images');

  // Check if imageContainer exists before proceeding
  if (imageContainer) {
    images.forEach((image, i) => {
      const imgGroup = document.createElement('div');
      const imgElement = document.createElement('img');
      const imgText = document.createElement('p')
      imgGroup.classList.add('imgGroup');
      imgText.classList.add('imgText');
      imgText.innerText = `${image.split('.')[0]}.${image.split('.')[1].toLowerCase()}`;
      imgElement.src = `${imageFolder}/${image}`;
      imgElement.classList.add('img');
      imgGroup.appendChild(imgElement)
      imgGroup.appendChild(imgText)
      imageContainer.appendChild(imgGroup);
    });

    // Dispatch a custom event indicating that images are loaded
    const event = new Event('imagesLoaded');
    window.dispatchEvent(event);
  } else {
    console.error('Element with id "images" not found.');
  }
});