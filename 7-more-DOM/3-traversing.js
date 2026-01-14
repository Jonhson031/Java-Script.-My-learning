'use strict';

// DOM travesrting
// means moving through (navigating) the DOM tree to find or access related elements

const h1 = document.querySelector('h1');

// Going downwards: Child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// Going upwards: Parent
console.log(h1.parentNode);
console.log(h1.parentElement); // ? we use it more often
h1.closest('header').style.background = 'var(--gradient-secondary)';


// Going sideways: sibling
// we can only access direct sibling: previous and next one
console.log(h1.previousElementSibling);
h1.nextElementSibling.style.background = 'var(--gradient-primary)';


console.log(h1.parentElement. children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.9)';
});