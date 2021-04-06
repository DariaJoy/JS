/* Задание 1. */

const arrPrime = [];
let range = 100;
let i = 2; //В диапазоне от 1 до 100, 2 – первое простое число.

while (i < range) {
    if (getPrimeNumber(i)) {
        arrPrime.push(i);
    }
    i++;
}

function getPrimeNumber(range) {
    for (let i = 2; i < range; i++) {
        if (range % i === 0) {
            return false;
        }
    }
    return true;
}

// function showPrimeNumbers(range) {
//     for (let i = 2; i < range; i++) {
//         if (getPrimeNumber(i)) {
//             arrPrime.push(i);
//         }
//     }
//    return arrPrime;  
// }



alert('Все простые числа от 1 до 100: ' + arrPrime);

/* Задание 2. */

let priceOne = +prompt('Введите количество для первого товара: ');
let priceTwo = +prompt('Введите количество для второго товара: ');

let customBasket = [
    ['Куртка "Adidas"', 1000, priceOne],   
    ['Кеды "Convers"', 2700, priceTwo],
]

function totalPrice(customBasket) {
    let price = 0;
    customBasket.forEach((basketItem) => {
        price += basketItem[1] * basketItem[2]
    });
    return price;
}

alert('Стоимость Вашей покупки: ' + totalPrice(customBasket) + 'руб.');

/* Задание 3. */

for (let i = 0; i <= 9; console.log(i++)) {}

/* Задание 4. */

let arr = [];
        let end = 0;
        while (end < 20){
            end++;
            arr.push('x');
            console.log(arr);
        }



