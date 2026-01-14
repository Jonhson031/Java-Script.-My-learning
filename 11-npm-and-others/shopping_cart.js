// ? Exporting Module
console.log('Exporting Module');

// Blocking code:
// console.log('Start fetching users');
// ? Using await outside of any top-level functions will pause code from execution
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finished fetching users');

const shippingCost = 10; // to export any varialbe.
export const cart = [];

export const addToCart = function (item, quantity) {
    cart.push({ item, quantity });
    console.log(`${item} added to cart, with quatity of ${quantity}`);
}
const totalPrice = 115;

export { totalPrice, shippingCost};
