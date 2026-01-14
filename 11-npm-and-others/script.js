// ? Importine Module
// All import are hoisted to the top
// All modules are executed in strict by default
// import { addToCart, totalPrice, shippingCost as shippingPrice } from './shopping_cart.js';
// We can use 'as' to change the name of imported variable;
// console.log('Importine Module');
// addToCart('Coke', 2);
// console.log(totalPrice, shippingPrice)


// ? To import everyting we use *
import * as shoppingCart from './shopping_cart.js'; // it creates object from imported file
console.log(shoppingCart);
const cart = shoppingCart.cart;
// To take data from imported file (object);
shoppingCart.addToCart('Coke', 2);
shoppingCart.addToCart('Bread', 5);
const shippingCost = shoppingCart.shippingCost;
console.log(shippingCost);
console.log(cart)

// ? Top-Level await:
// We can use await outside async function, but only in modules
async function getLastPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return ({ title: data.at(-1).title, text: data.at(-1).body });
}
const lastPost = getLastPost()
lastPost.then(last => console.log(last))
// ? Using await outside of any top-level functions will pause code from execution
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
console.log('Something') // When we fetch something that way, all code is waiting.



// ? Module Pattern
// Is a classic JavaScript pattern (from before ES modules existed) used to organize code, create private state, and avoid global variables.
const shoppingCart2 = (function () {
    const cart = [];
    const shippingPrice = 10;
    const totalPrice = 110;
    const addToCart = function (item, quantity) {
        cart.push({ item, quantity });
        console.log(`${item} added to cart, with quatity of ${quantity}`);
    }
    return { cart, shippingPrice, addToCart } // to make it public
})() // IIFE
shoppingCart2.addToCart('pizza', 1);
console.log(shoppingCart2.cart)

// ? CommonJS Modules
// Used in Node JS
// const express = require('express');

// ? loading files from npm
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// const state = {
//     cart: [
//         {product: 'tortillas', quantity: 5},
//         {product: 'pepsi', quantity: 1},
//     ],
//     user: {loggenIn: true},
// }
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
// state.user.loggenIn = false;
// console.log(stateClone, stateDeepClone);


// Polyfill: try to load the installed package (bundler will resolve this).
// If that fails at runtime (plain browser without bundler), fall back to CDN.
(async function () {
    try {
        await import('core-js/stable');
    } catch (err) {
        const cdn = 'https:' + '//cdn.jsdelivr.net/npm/core-js@3/stable/index.js';
        await import(cdn);
    }
})();
