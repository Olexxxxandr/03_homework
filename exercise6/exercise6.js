// Реалізувати логіку підрахунку ціни товару по його варіаціях
//(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.

//--------------------------------------СТВОРЕННЯ КЛАСУ(необов'язково)-----------------------------------------

class Shoe {
    constructor(name, info, color, price) {
        this.name = name;
        this.info = info;
        this.color = color;
        this.price = price;
    }
}


//------------------------------------------------------------------------------------------------------------


//----------------------------------------------ОТРИМАННЯ ДАНИХ------------------------------------------------

const colors = document.querySelector('.colors').children;
let priceField = document.getElementById('outprice');


let shoesInCart = [];

const shoeData = {
    shoeName: document.querySelector('.big').innerHTML,
    info: document.querySelector('.text').innerHTML,
    color: document.querySelector('.active').innerHTML,
    price: document.getElementById('outprice').innerHTML
}

const {shoeName, info, color, price} = shoeData;

const nikeShoe = new Shoe(shoeName, info, color, price)

shoesInCart.push(nikeShoe);


//------------------------------------------------------------------------------------------------------------


//-----------------------------------ЗМІНА КІЛЬКОСТІ ТОВАРУ У КОРЗИНІ------------------------------------------

const addBtn = document.getElementById('add-amount');
const subBtn = document.getElementById('sub-amount');

const amountOfProduct = document.getElementById('amount');

addBtn.addEventListener('click', () => {
    shoesInCart.push(nikeShoe);
    amountOfProduct.innerHTML = shoesInCart.length;

    priceField.innerHTML = +priceField.innerHTML + +nikeShoe.price;
})

subBtn.addEventListener('click', () => {
    if(amountOfProduct.innerHTML == 1){
        amountOfProduct.innerHTML = 1;
    } else {
        shoesInCart.pop(nikeShoe);
        amountOfProduct.innerHTML = shoesInCart.length;
        console.log(shoesInCart)
        priceField.innerHTML = +priceField.innerHTML - +nikeShoe.price
    }
})


//------------------------------------------------------------------------------------------------------------


//---------------------------------------------ЗАВДАННЯ З УМОВИ-----------------------------------------------

const myPrices = [189.99,175.99,199.99,230.99,299.99];

changePricesByGivenPrices(myPrices);

function changePricesByGivenPrices(prices) {
    for(let i = 0; i < colors.length; i++) {

        colors[i].addEventListener('click', () => {

            const activeColor = document.querySelector('.active');
            activeColor.classList.remove('active');
    
            colors[i].classList.add('active');
            priceField.innerHTML = prices[i];
            amount.innerHTML = 1;
            shoesInCart = [nikeShoe];
        });
    }
}


//-----------------------------------------------------------------------------------------------------------


//-------------------------------------------УРАХУВАННЯ ЗНИЖКИ-----------------------------------------------

const discountInput = document.getElementById('discount-input');
const discountButton = document.getElementById('discount-button');

let discountInfo = document.getElementById('discount-info');
let discountNumber = document.getElementById('discount');

discountButton.addEventListener('click', () => {
    let discount = +discountInput.value;
    if(discount > 0 && discount <= 100) {
        priceField.innerHTML = (+priceField.innerHTML * discount / 100).toFixed(2) - 0.01;
        nikeShoe.price = +priceField.innerHTML;
        discountButton.disabled = true;
        discountNumber.innerText = discountInput.value;
        discountInfo.style.display = "block";
    } else {
        alert("Incorrect data for input");
    }
    discountInput.value = "";
})