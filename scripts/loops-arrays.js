// -------------------------------1-----------------------------------

/* 1.
Написати функцію createArray(start, end),
яка приймає на вхід 2 параметри:
  - початкове значення
  - кінцеве значення
а на виході отримує масив із діапазоном цих значень
(реалізувати достатньо лише із числовими значеннями) */


function createArray(start, end) {
    // розв'язок через цикл
    const array = []

    for (let i = start; i <= end; ++i) {
        array.push(i);
    }

    return array;
}

let arrayForTask1 = createArray(2, 9);
console.log(`Створення масиву з діапазону в параметрах:\n[${arrayForTask1}]`);


// -------------------------------2-----------------------------------

/* 2.
Задані цілі числа a і b (a < b).
Виведіть усі цілі числа від a до b включно,
при цьому a виводится 1 раз,
a число а + 1 - два рази і т.д. */


const createSeries = (start, end) => {
    const series = [];

    for (let i = start; i <= end; ++i) {
        for (let j = 1; j <= i; ++j) {
            series.push(i);
        }
    }

    return series
}

console.log("Створення послідовності, в якому кожен наступний елемент виводить i + 1 разів:\n" + createSeries(1, 3));


// -------------------------------3-----------------------------------

/* Напишіть функцію randArray(k),
яка заповнюватиме масив k випадковими цілими числами.
Випадкові числа генеруються із діапазону 1-500. */

const randArray = k => {
    const randomArray = [];

    for (let i = 0; i < k; ++i) {
        randomArray.push(Math.floor(Math.random() * 500));
    }

    return randomArray;
}

console.log(`Створення масиву з випадковими цілими числами із діапазону 1-500:\n[${randArray(5)}]`);


// -------------------------------4-----------------------------------

/* Написати функцію compact() яка має приймати на вхід масив,
 а на вихід має повертати значення нового масиву без повторень. */

const compact = (arr) => {
    const clearArray = [];

    for (let i = 0; i < arr.length; ++i) {
        if (!clearArray.includes(arr[i])) {
            clearArray.push(arr[i]);
        }
    }

    return clearArray;
}

const arrayForTask4 = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arrayForTask4);

console.log(`Масив без повторень: [${arrayForTask4}]`);


// -------------------------------5-----------------------------------

/* Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву,
але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число) */

const sortElementsOfArrayByDataType = array => {
    const trueArray = array.flat();

    const arrayOfTheSameTypes = [];
    const numbersArray = [];
    const stringsArray = [];

    for(let i = 0; i < trueArray.length; ++i) {
        if(typeof trueArray[i] === 'number') {
            numbersArray.push(trueArray[i]);
        } else {
            stringsArray.push(trueArray[i]);
        }
    }

    arrayOfTheSameTypes.push(numbersArray, stringsArray);
    return arrayOfTheSameTypes;
}

let arrayForTask5 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
let arrNew = sortElementsOfArrayByDataType(arrayForTask5);
console.log(arrNew);

/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”]
] 
*/


// -------------------------------6-----------------------------------

/* Напишіть функцію calc(a, b, op),
яка виконує над числами a і b одну із арифметичних операцій
та повертає її результат. Вид операції визначається цілим числом op:
1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання. */

const calc = (a, b, op) => {
    let calculating = null;
    let operation = "";

    switch(op) {
        case 1:
            calculating = a - b;
            operation = "-";
            break;
        case 2:
            calculating = a * b;
            operation = "*";
            break;
        case 3:
            calculating = a / b;
            operation = "/";
            break;
        default:
            calculating = a + b;
            operation = "+";
            break;
    }

    return `${a} ${operation} ${b} = ${calculating}`;
}

console.log("Калькулятор:\n" + calc(10, 3, 9));


// -------------------------------6-----------------------------------

/* Напишіть функцію findUnique(arr),
яка приймає масив arr і перевіряє на унікальність його елементи.
Якщо всі елементи масиву унікальні (не мають дублів),
то функція поверне true, інакше - false. */


const findUnique = (arr) => {
    const uniqueArr = [];

    for(let i = 0; i < arr.length; ++i) {
        for(let j = i + 1; j < arr.length; ++j){
            if(arr[i] === arr[j]) {
                uniqueArr.push(arr[i]);
            }
        }
    }

    return !uniqueArr.length;
}

console.log(`Масив заданий користувачем унікальний?\n${findUnique([1, 2, 3, 5,])}`);