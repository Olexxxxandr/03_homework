// --------------------------------------4----------------------------------------------

/* Створіть клас MonthException, конструктор якого приймає параметр message 
і ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month 
– це порядковий номер місяця в році. 
Функція повертає назву місяця відповідно до введеного номера місяця. 
У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException 
з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків. */

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

const getMonths = () => {
    return [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
}
const showMonthName = (month = null) => {
    const nameOfMonth = getMonths();

    if(month < 0 || month > 12) {
        throw new MonthException("Incorrect month number");
    }
    else if(isNaN(month)) {
        throw new TypeError("Incorrect type of month");
    }
    else if(!month) {
        // will working when parametres is not given to the function
        throw new Error("The data is not recognized");
    }
    return nameOfMonth[month - 1];
}

try {
    const numOfMonth = +prompt("Enter number of month");

    const monthName = showMonthName(numOfMonth);

    console.log(monthName);
} catch(err) {

    if(err instanceof MonthException) {
        console.error(`${err.name}: ${err.message}`);
    } 
    else if(err instanceof TypeError) {
        console.error(`${err.name}: ${err.message}`);
    } else {
        console.error(err.message);
    }
}