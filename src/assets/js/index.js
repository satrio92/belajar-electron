window.addEventListener('imagesLoaded', () => {
  const imagesBox = document.querySelector('#images')
  const images = document.querySelectorAll('.img')
  const imagesGroup = document.querySelectorAll('.imgGroup')
  const imagesText = document.querySelectorAll('.imgText')
  const previewGroup = document.querySelector('#previewGroup')
  const preview = document.querySelector('#preview')
  const previewText = document.querySelector('#previewText')
  const imageShowcaseList = document.querySelector('#images-showcase-list')
  const imageShowcaseGrid = document.querySelector('#images-showcase-grid')
  const imageShowcaseListIcon = document.querySelector('#images-showcase-list-icon')
  const imageShowcaseGridIcon = document.querySelector('#images-showcase-grid-icon')
  const previewToggle = document.querySelector('#images-showcase-toggle-icon')

  let previewActive = true;

  preview.src = images[0].src;
  previewText.innerText = imagesText[0].textContent

  imageShowcaseList.addEventListener("click", () => {
    imageShowcaseList.classList.add('images-showcase-fill')
    imageShowcaseGrid.classList.remove('images-showcase-fill')
    imageShowcaseListIcon.classList.add('images-showcase-icon-fill')
    imageShowcaseGridIcon.classList.remove('images-showcase-icon-fill')
    imagesBox.style.display = 'block'
    imagesBox.style.paddingRight = '12px';
    imagesGroup.forEach((imageGroup, i) => {
      imageGroup.style.flexDirection = 'row'
      imageGroup.style.padding = '6px 0'
      imageGroup.style.borderBottom = '1px solid #aaa'
      imageGroup.style.gap = '12px'
      images[i].style.width = '75px'
      imagesText[i].style.fontSize = 'small'
    })
  })

  imageShowcaseGrid.addEventListener("click", () => {
    imageShowcaseGrid.classList.add('images-showcase-fill')
    imageShowcaseList.classList.remove('images-showcase-fill')
    imageShowcaseGridIcon.classList.add('images-showcase-icon-fill')
    imageShowcaseListIcon.classList.remove('images-showcase-icon-fill')
    imagesBox.style.display = 'flex'
    imagesBox.style.paddingRight = '6px';
    imagesGroup.forEach((imageGroup, i) => {
      imageGroup.style.flexDirection = 'column'
      imageGroup.style.padding = '0'
      imageGroup.style.borderBottom = '0'
      imageGroup.style.gap = '0'
      images[i].style.width = '100px'
      imagesText[i].style.fontSize = 'x-small'
    })
  })

  previewToggle.addEventListener("click", () => {
    if (previewActive) {
      previewGroup.style.display = 'none';
      previewGroup.style.marginTop = '-300px';
    } else {
      previewGroup.style.display = 'inline';
      previewGroup.style.marginTop = '0';
    }
    previewActive = !previewActive
  })

  imagesGroup.forEach((imageGroup, i) => {
    imageGroup.addEventListener("click",() => {
      preview.src = images[i].src
      previewText.innerText = imagesText[i].textContent
    })
  })
});
