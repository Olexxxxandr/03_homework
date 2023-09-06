// ---------------------------------------1-------------------------------------------

/* На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
У модальному вікні необхідно послідовно вивести вміст:
     1) першого елемента списку
     2) останнього елемента списку
     3) другого елемента списку
     4) четвертого елемента списку
     5) третього елемента списку */

let ulListItem = document.getElementById('list');

version1();
version2();

function version1() {
    const firstElement = ulListItem.firstElementChild;
    const lastElement = ulListItem.lastElementChild;
    const secondElement = firstElement.nextElementSibling;
    const fourthElement = lastElement.previousElementSibling;
    const thirdElement = secondElement.nextElementSibling;

    const dataResult = [   firstElement, lastElement,
        secondElement, fourthElement, thirdElement
    ];

    dataResult.map(item => Number(item.textContent))
        .forEach(item => alert(item));
}


function version2() {
    let listItems = ulListItem.children;

    const arrayOfItems = Array.from(listItems)
                        .map(item => Number(item.innerText));
    
    const dataResult = [arrayOfItems[0], arrayOfItems[4],
        arrayOfItems[1], arrayOfItems[3], arrayOfItems[2]
    ];

    alert(dataResult);
}