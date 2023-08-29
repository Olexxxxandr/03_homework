// --------------------------------------1----------------------------------------------

/* Напишіть функцію sumSliceArray(arr, first, second),
яка приймає масив arr і два числа (first и second)
– порядкові номери елементів масиву, які необхідно скласти.
Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи. 
Функція повинна генерувати винятки, якщо були введені не числа,
і коли одне з чисел або обидва більшого розміру за довжину масиву.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків. */

const sumSliceArray = (arr, first, second) => {
    if(arr.length === 0 || arr.length === 1) {
        throw new EvalError("Error: Довжина масиву повинна бути більше за 1");
    }
    if(typeof first !== 'number' || typeof second !== 'number') {
        throw new TypeError("Error: Введені дані не є числами");
    }
    else if(first > arr.length - 1 || second > arr.length - 1) {
        throw new RangeError("Error: Введені числа вийшли за межі діапазону масиву");
    }
    else if(first <= 0 || second <= 0) {
        throw new Error("Error: Введені числа повинні бути більші за 0");
    }
    return `Сума чисел по заданих індексах дорівнює ${arr[first - 1] + arr[second - 1]}`;
}

try {
    let numbers = [1,2,3,4,5,6];

    const sumOfSlice = sumSliceArray(numbers, 1, 2);

    console.log(sumOfSlice);

} catch (err) {

    if(err instanceof TypeError) {
        console.error(err.message);
    } 
    else if(err instanceof RangeError) {
        console.error(err.message);
    }
    else if(err instanceof EvalError) {
        console.error(err.message);
    } else {
        console.error(err.message);
    }

}