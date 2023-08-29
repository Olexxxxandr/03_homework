// --------------------------------------2----------------------------------------------

/* Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус
(адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:
вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
Користувач не ввів жодних даних в будь-якому полі 
(виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
У полі статус введено неправильне слово (тип помилки EvalError).
В полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму.
У блоці catch передбачена можливість виведення назви та опису помилки. */

const inputData = () => {
    const userName = prompt("Enter your name");
    const userAge = +prompt("Enter your age");
    let userStatus = prompt("Enter your status").toLowerCase();

    let checkName = !userName.length ? "name" : "";
    let checkAge = userAge.toString() === "0" ? "age" : "";
    let checkStatus = !userStatus.length ? "status" : "";

    if(checkName || checkAge || checkStatus) {
        throw new Error(`Error: The field is empty or age is equal 0. Please enter your ${checkName} ${checkAge} ${checkStatus}`);
    }

    if(userAge < 18 || userAge > 70) {
        throw new RangeError("Error: User doesn't have access to the website because of the age limit!");
    }
    else if(isNaN(userAge)) {
        throw new TypeError("Error: Entered data is not a number");
    }
    
    if(userStatus != 'user' && userStatus != 'admin' && userStatus != 'moderator') {
        throw new EvalError("Error: Sorry!!! We can't give you an access to the website because of the user's status!")
    }
    alert(`${userName}, you have access to movies!`);
}

const checkAge = () => {
    try {
        inputData();

    } catch(err) {

        if(err instanceof RangeError) {
            alert(err.message);
            console.error(err.message);
        }
        else if(err instanceof TypeError) {
            alert(err.message);
            console.error(err.message);
        }
        else if(err instanceof EvalError) {
            alert(err.message);
            console.error(err.message);
        } else {
            alert(err.message);
            console.error(err.message);
        }
    }
}

checkAge();