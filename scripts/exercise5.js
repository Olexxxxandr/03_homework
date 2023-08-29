// --------------------------------------5----------------------------------------------

/* Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id 
і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі
якщо введено від’ємне id.

Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, 
в разі виключної ситуації виводить повідомлення про помилку. 
Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids. */

const showUser = id => {
    if(id <= 0) {
        throw new RangeError(`Error: ID must not be negative: ${id}`);
    }
    if(typeof id !== "number") {
        throw new TypeError(`Error: ID must not be a string: ${id}`);
    }
    return {id};
}

const showUsers = ids => {

    if(typeof ids !== 'object') {
        throw new TypeError("Incorrect data!");
    }
    else if(ids.length === 0) {
        throw new RangeError("The array must not be empty!");
    }

    const idsArr = [];
    ids.map(item => {
        try {
            let objItem = showUser(item);
            idsArr.push(objItem);
        } catch (err) {
            if(err instanceof RangeError) {
                console.log(err.message);
            }
            else if(err instanceof TypeError) {
                console.log(err.message);
            }
        }
    });
    return idsArr;
}

try{
    const usersId = showUsers([7, -12, 44, 'dsa', 22]);

    console.log(usersId);
} catch(err) {
    if(err instanceof TypeError) {
        console.error(err.message);
    }
    else if(err instanceof RangeError) {
        console.error(err.message);
    }
}