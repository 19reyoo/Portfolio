/* =========================
   Gallery Carousel (Designs)
   ========================= */
const galleryTrack = document.querySelector('.carousel-track');
const gallerySlides = Array.from(galleryTrack.children);
const galleryPrev = document.querySelector('#gallery .carousel-btn.prev');
const galleryNext = document.querySelector('#gallery .carousel-btn.next');
const galleryDotsNav = document.querySelector('#gallery .carousel-dots');

let galleryIndex = 0;

// Create dots for gallery
gallerySlides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  galleryDotsNav.appendChild(dot);
});

const galleryDots = Array.from(galleryDotsNav.children);

function updateGalleryCarousel() {
  galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
  galleryDots.forEach(dot => dot.classList.remove('active'));
  galleryDots[galleryIndex].classList.add('active');
}

galleryNext.addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % gallerySlides.length;
  updateGalleryCarousel();
});

galleryPrev.addEventListener('click', () => {
  galleryIndex = (galleryIndex - 1 + gallerySlides.length) % gallerySlides.length;
  updateGalleryCarousel();
});

galleryDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    galleryIndex = i;
    updateGalleryCarousel();
  });
});


/* =========================
   Languages Carousel
   ========================= */
const langTrack = document.querySelector('.language-track');
const langSlides = Array.from(langTrack.children);
const langPrev = document.querySelector('#languages .carousel-btn.prev');
const langNext = document.querySelector('#languages .carousel-btn.next');
const langDotsNav = document.querySelector('#languages .carousel-dots');

let langIndex = 0;

// Create dots for languages
langSlides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  langDotsNav.appendChild(dot);
});

const langDots = Array.from(langDotsNav.children);

function updateLangCarousel() {
  langTrack.style.transform = `translateX(-${langIndex * 100}%)`;
  langDots.forEach(dot => dot.classList.remove('active'));
  langDots[langIndex].classList.add('active');
}

langNext.addEventListener('click', () => {
  langIndex = (langIndex + 1) % langSlides.length;
  updateLangCarousel();
});

langPrev.addEventListener('click', () => {
  langIndex = (langIndex - 1 + langSlides.length) % langSlides.length;
  updateLangCarousel();
});

langDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    langIndex = i;
    updateLangCarousel();
  });
});
