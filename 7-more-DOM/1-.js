'use strict';
//  Selecting, Creating and Deliting Elements
// 1. Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section'); // returns NodeList
console.log(allSections);

const allButtons = document.getElementsByTagName('button'); //  creates HTMLCollection. Updates automaticaly when element is changed
//  For example: when you delete any button, this collection will be updated. While NodeList doesn't update automaticaly
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); //  also returns collection
console.log(document.getElementById('section--1'))


// 2. Creating and Inserting Elements
// .insertAdjacentHTMl - check shopco > cart.js

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improve functionality and analyticks';
message.innerHTML = `We use cookies to improve functionality and analyticks. <button class="btn btn--close-cookie">Got it!</button>`;
header.prepend(message); // ? prepend -- adds element as the first child (inside) the selected element
header.append(message); // ? append -- adds element to the end. When you use append after prepend it will simply move element, but not insert new one
// header.append(message.cloneNode(true)); // to insert same element multiply times, we copy that element

// header.before(message); // ? before -- adds element (outside) before selectem element
// header.after(message); // adds after (outside))


// 3. Delete Element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    message.remove()
});


// Styles, Attributes and Classes
// 1. Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color); // to get specific style from element

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'green');


// 2. Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // absolute version
console.log(logo.getAttribute('src')); // relative version
console.log(logo.className);

// To change attribute
logo.alt = 'Beatiful minimalist logo saying Bankist';

// Non standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // to get non standard attribute

// To set Attribute
logo.setAttribute('company', 'Bankist');

// 3. Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
if (logo.classList.contains('j')) {
    console.log(1);
} else { console.log(2) };


// ! Don't use
logo.clasName = 'jonas';