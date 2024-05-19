const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
let currentImage = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  images[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

function goToImage(index) {
  currentImage = index;
  showImage(currentImage);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToImage(index);
  });
});

showImage(currentImage);