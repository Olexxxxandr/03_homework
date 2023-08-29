// --------------------------------------3----------------------------------------------

/* Реалізуйте функцію calcRectangleArea(width, height),
яка приймає 2 параметри ширина прямокутника width і висота прямокутника height
і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації. */

const calcRectangleArea = (width = null, height = null) => {
    if(isNaN(width) || isNaN(height)) {
        throw new TypeError("Error: Width or height of rectangle is not a number");
    }
    else if(width < 0 || height < 0) {
        throw new RangeError("Error: Width or height cannot be less than 0");
    }
    else if(!width || !height) {
        // will working when parametres is not given to the function 
        throw new Error("Error: The data is not recognized");
    }
    return width * height;
}

try {
    //const width = +prompt("Enter width of rectangle");
    //const height = +prompt("Enter height of rectangle");

    const rectangleArea = calcRectangleArea(10, 5);

    console.log(rectangleArea);

} catch(err) {

    if(err instanceof TypeError) {
        console.error(err.message);
    }
    else if(err instanceof RangeError) {
        console.error(err.message);
    } else {
        console.error(err.message);
    }
}