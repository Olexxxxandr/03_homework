function createWindow(width, height) {
    return window.open(`./new-window.html`, '', `width=${width},height=${height - 1}`);
}

const windowWidth = 300;
const windowHeight = 300;

const newWindow = createWindow(windowWidth, windowHeight);

winsow.setTimeout(() => {
    newWindow.resizeTo(500, 500);

    window.setTimeout(() => {
        newWindow.moveTo(200, 200);

        window.setTimeout(() => {
            newWindow.close();
        }, 2000);
    }, 2000);
}, 2000);