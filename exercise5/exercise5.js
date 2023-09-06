/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/

// getting data
const circle = document.querySelectorAll('.circle');
const circleAttribute = 'data-anim';

setAnimationFromAttributeOfTag(circle, circleAttribute);


// function for task which can be used again for another data
function setAnimationFromAttributeOfTag(tag, attributeName) {
    // creating array of node list
    const elementsOfTagElements = Array.from(tag);

    // getting attributes from array
    const attributesOfTag = elementsOfTagElements.map(item => item.getAttribute(attributeName));

    // adding new class to array
    elementsOfTagElements.map((item, index) => item.classList.add(attributesOfTag[index]));
} 