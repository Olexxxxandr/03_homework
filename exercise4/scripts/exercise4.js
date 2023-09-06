// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const btnSend = document.querySelector('.btn');
const info = document.querySelector('.out');

const fieldset = document.querySelector('fieldset');

const userName = fieldset.elements.fio;
const phone = fieldset.elements.phone;
const birthday = fieldset.elements.birthday;
const email = fieldset.elements.email;

const data = [userName, phone, birthday, email];

const users = [];

btnSend.onclick = () => {
    if (userName.value !== '' && phone.value !== ''
        && birthday.value !== '' && email.value !== '') {
        const newUser = new User(
            userName.value, phone.value,
            birthday.value, email.value
        );
        users.push(newUser);

        info.innerHTML += createPost(newUser);

        data.map(item => item.value = "");
    } else {
        alert("Дані не введені!!!");
    }



}

function createPost(obj) {
    return `
        <div class="info-item">
            <p class="info-item-name">Ім'я:\n ${obj.name}</p>
            <div class="info">
                <p class="info-item-phone">Номер телефону:\n ${obj.phone}</p>
                <p class="info-item-birth">Дата народження:\n ${obj.birthday}</p>
                <p class="info-item-email">Емейл:\n ${obj.email}</p>
            </div>
        </div>
    `;
}


class User {
    static id = 1;
    constructor(name, phone, birthday, email) {
            this.id = User.id++;
            this.name = name;
            this.phone = phone;
            this.birthday = birthday;
            this.email = email;
    }
}