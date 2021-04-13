/* Задание 1. */

let request = +prompt('Введите число от 0 до 999');
function getObjRequest(number) {
    let objRequest = {
        number: request, 
        units: 0,
        tens: 0,
        hundreds: 0,
      };
      if (objRequest.number <= 9){
          objRequest.units = objRequest.number;
      } else if (objRequest.number <= 999){
          objRequest.units = Math.floor(objRequest.number % 10);
          objRequest.tens = Math.floor(objRequest.number / 10 % 10);
          objRequest.hundreds = Math.floor(objRequest.number / 100 % 10);
      } else {
          objRequest.number = 0;
          console.log('Вы ввели число вне диапазона 0 - 999');
      }
      console.log(objRequest);
}
       
getObjRequest (request);

/* Задание 2. */

let priceOne = +prompt('Введите количество для первого товара: ');

let priceTwo = +prompt('Введите количество для второго товара: ');

const customBasket = {
    allItems: [
        {
            itemId: 11110,
            itemName: 'Куртка "Adidas"',
            itemPrice: 6999,
            itemQuantity: 10,
            getRightPriceOne(){
                if (priceOne >  allItems.itemQuantity){
                    return alert('Нет на складе. Вы можете заказть ' + allItems.itemQuantity + 'шт.');
                } else {
                    allItems.itemQuantity = priceOne;
                }
            },
        }, 
        {
            itemId: 11111,
            itemName: 'Кеды "Converse"',
            itemPrice: 7999,
            itemQuantity: 10,
            getRightPriceTwo(){
                if (priceTwo >  allItems.itemQuantity){
                    return alert('Нет на складе. Вы можете заказть ' + allItems.itemQuantity);
                } else {
                    allItems.itemQuantity = priceTwo;
            }
        }  
    }
    ],
    totalPrice() {
        return this.allItems.reduce((prices, quantity) => 
            price += prices.itemPrice * quantity.itemQuantity, 0);
    },
};

alert('Стоимость Вашей покупки: ' + totalPrice(customBasket) + 'руб.');
