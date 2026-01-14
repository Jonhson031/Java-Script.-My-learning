'use strict';
// 1. Types of Events and Event Handlers
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
    alert('v')
}
h1.addEventListener('mouseenter', alertH1);
// To remove Event Listener
h1.removeEventListener('mouseenter', alertH1);

// 2. Event Propagation: Bubbling and Capturing
// Make random color:
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;


document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget)

    // to stop Event Propagation
    // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV_LINKS', e.target, e.currentTarget)
});
document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget)
});