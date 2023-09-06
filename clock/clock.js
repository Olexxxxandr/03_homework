const clockBlock = document.getElementById('clock');
const dateBlock = document.getElementById('date');

function getDate() {
    const currentDate = new Date();

    const months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ]

    let month = currentDate.getMonth();
    let day = currentDate.getDate();

    return `${months[month]} ${day}`;
}

function getCurrentTime() {
    const currentDate = new Date();

    let hours = currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours();
    let minutes = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
    let seconds = currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}

dateBlock.innerHTML = getDate();
clockBlock.innerHTML = getCurrentTime();

setInterval(() => {
    dateBlock.innerHTML = getDate();
    clockBlock.innerHTML = getCurrentTime();
}, 1000);
