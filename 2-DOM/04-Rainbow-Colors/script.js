const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
let text = document.querySelectorAll('h1 > span');
for (let i = 0; i < colors.length; i++){
    console.log(text[i].textContent);
    text[i].style.backgroundColor = colors[i];
}