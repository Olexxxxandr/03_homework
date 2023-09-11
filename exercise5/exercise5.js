const liveBtn = document.querySelector('button');

const output = document.getElementById('output');

function getMessage(message, color) {
    output.innerHTML += `<p class="${color}">${message}</p>`;
}

liveBtn.addEventListener('click', () => {
    getMessage('I was pressed!', 'orange');
});

liveBtn.onmouseover = () => {
    getMessage('Mouse on me!', 'green');
}

liveBtn.onmouseleave = () => {
    getMessage('Mouse is not on me!', 'red');
}