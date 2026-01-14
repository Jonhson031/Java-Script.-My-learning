'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((button) => button.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth Scrolling. Learn More
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  const coordinates = section1.getBoundingClientRect(); // to get coordinates of section 1
  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY); // to get current scroll on Y and X

  window.scrollTo({ // old way, most browser support
    left: coordinates.left + window.scrollX,
    top: coordinates.top + window.scrollY,
    behavior: 'smooth',
  })

  // section1.scrollIntoView({behavior: "smooth"}); // ? ths is an new way of doing it
})


// Event Deligation | Page Navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})


// Tabs
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsBtn = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clickedBtn = e.target.closest('.operations__tab');
  // Guard clouse
  if (!clickedBtn) return;

  tabsBtn.forEach(btn => btn.classList.remove('operations__tab--active'));
  clickedBtn.classList.add('operations__tab--active');

  tabsContent.forEach(content => content.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clickedBtn.dataset.tab}`).classList.add('operations__content--active');
})

// Menu Fade Navigation | Passing Argumets to Event Hadnlers
const nav = document.querySelector('.nav');
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = nav.querySelectorAll('.nav__link');
    const logo = document.querySelector('.nav__logo');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    })
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation
// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', function(){
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky');
//   } else{
//     nav.classList.remove('sticky');
//   }
// })

// Better way to do Sticky Navigation with Intersaction Observer API
// ? The Intersection Observer API lets you detect when an element enters or leaves the viewport 
// ? (the visible part of the web page) — without constantly listening to scroll events. 

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);

//   })
// }
// const obsOptions = {
//   root: null, // root is element that target is intersectiong. // Use the browser viewport when null
//   threshold: [0, 0.2] // Triggers when 10% visible
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);



// Revealing Sections on Scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  })
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,

})
allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
})


// Images Lazy Loading
const images = document.querySelectorAll('img.lazy-img');
const loadImage = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.addEventListener('load', () => img.classList.remove('lazy-img'));
      observer.unobserve(img); // Stop watching it
    }
  });
}
const imagesObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
})
images.forEach(img => {
  imagesObserver.observe(img);
})

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContiner = document.querySelector('.dots');

const createDots = function(){
  slides.forEach((_, i) => {
    dotsContiner.insertAdjacentHTML('beforeend', 
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  })
}
createDots();

const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
activateDot(0);

let curSlide = 0;
const maxSlide = slides.length;
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  })
}
goToSlide(0);



// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

// Previous Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
}

const initSlider = function(){

}
initSlider();

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
})

dotsContiner.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')) {
    curSlide = Number(e.target.dataset.slide);
    goToSlide(curSlide);
    activateDot(curSlide);
  }
})