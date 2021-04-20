/* Задание 1. */
const chessBoard = document.querySelector('.chessBoard');

let i = 0, count = 0;

while (count < 8 * 8) {
  let cell = document.createElement('div');
  chessBoard.appendChild(cell);

  cell.classList.add('cellItem');

  if (i && i % 2)
    cell.classList.add('cellItemBlack');

  i += ((i + 2) % 9) ? 1 : 2;

  count++;
}

/* Задание 2. */

const cartItems = {
    render(item) {
        return `<div class="item">
                    <div><b>Название товара</b>: ${item.itemName}</div>
                    <div><b>Цена за шт.</b>: ${item.itemPrice}</div>
                    <div><b>Количество</b>: ${item.itemQuantity}</div>
                    <div><b>Стоимость</b>: ${item.itemQuantity * item.itemPrice}</div>
                </div>`;
    },

    
}

const customBasket = {
    allItemsDiv: null,
    clearBtn: null,
    cartItems,
    allItems: [
        {
            itemId: 11110,
            itemName: 'Куртка "Adidas"',
            itemPrice: 6999,
            itemQuantity: 1,
        }, 
        {
            itemId: 11111,
            itemName: 'Кеды "Converse"',
            itemPrice: 7999,
            itemQuantity: 2,
    }
    ],
    countBasketPrice() {
        return this.allItems.reduce((totalPrice, cartItem) => 
        totalPrice + cartItem.itemPrice * cartItem.itemQuantity, 0);
    },
    init() {
        this.allItemsDiv = document.querySelector('.cartList');
        this.clearBtn = document.querySelector('.clearBtn');
        this.clearBtn.addEventListener('click', () => this.clearCart());
        this.render();
    },

    clearCart() {
        this.allItems = [];
        this.render();
    },

    render() {
        if (this.allItems.length) {
            this.allItems.forEach(item => {
                this.allItemsDiv.insertAdjacentHTML('beforeend', this.cartItems.render(item));
            });
            this.allItemsDiv.insertAdjacentHTML('beforeend', `В корзине ${this.allItems.length} позиций(а) стоимостью ${this.countBasketPrice()} руб.`);
        } else {
            this.allItemsDiv.textContent = 'Ваша корзина пуста';
        }
    },
};

customBasket.init();




