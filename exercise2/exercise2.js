/* Напишіть скрипт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
https://media.discordapp.net/attachments/1080492799943790642/1088041210431684648/image.png */


// getting data
const body = document.body;
const myDiv = document.getElementById('myDiv');
const myList = document.getElementById('myList');

// first and last elements of "p" list
const firstP = myDiv.firstElementChild;
const lastP = myDiv.lastElementChild;


// working with h1
body.firstElementChild.style.backgroundColor = "#90EE90";

// working with myDiv
firstP.style.fontWeight = "bold";
firstP.nextElementSibling.style.color = "red";
lastP.previousElementSibling.style.textDecoration = "underline";
lastP.style.fontStyle = "italic";

// working with myList
myList.innerHTML = Array.from(myList.children)
                    .map(item => item.textContent)
                    .join("");

// working with span
const span = document.querySelector('span')
                    .innerHTML = "";

