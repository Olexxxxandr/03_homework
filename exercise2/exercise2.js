let isClicked = false;

function changeCSS() {
    const paragraph = document.getElementById('text');
    
    if(!isClicked) {
        paragraph.classList.add('active');
        isClicked = true;
    } else {
        paragraph.classList.remove('active');
        isClicked = false;
    }
}