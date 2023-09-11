// creating select and options for it
function createSelect(values) {
    let innerSelectText = `<select name="users">`;

    for(let i = 0; i < values.length; i++) {
        innerSelectText += `<option value=${i + 1}>${values[i]}</option>`;
    }

    container.innerHTML = innerSelectText + `</select>`;
    container.innerHTML += `<button id="clear-btn">Choose and delete</button>`;
}

// getting data and pushing it on the web page
const container = document.querySelector('.container');

const data = ["Alex", "John", "Smith", "Michael", "Arthur", "Viktor"]

createSelect(data);


// algorithm 
const clearBtn = document.getElementById('clear-btn');
const select = document.querySelector('select');

clearBtn.addEventListener('click', () => {
    const selecteditem = select.options[select.selectedIndex];
    
    if(selecteditem) {
        select.removeChild(selecteditem);
        
        if(select.length === 0) {
            container.innerHTML = "";
        }
    } 
})