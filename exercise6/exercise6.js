const containerDiv = document.getElementById('page-sizes');

function getPageSizes() {
    return `<p>Width: ${window.innerWidth}, Height: ${window.innerHeight}</p>`;
}

containerDiv.innerHTML = getPageSizes();

window.addEventListener('resize', () => {
    containerDiv.innerHTML = getPageSizes();
});