const catalog = {
    catalogDiv: null,
    customCart: {},
    productList: [
        {
            itemId: 11110,
            itemName: 'Куртка "Adidas"',
            itemPrice: 6999,
        },
        {
            itemId: 11111,
            itemName: 'Кеды "Converse"',
            itemPrice: 7999,
        },
    ],

    init(catalogDivClass, cart) {
        this.catalogDiv = document.querySelector(`.${catalogDivClass}`);
        this.customCart = cart;
        this.render();
        this.btnAddEvent();
    },

    render() {
        if (this.getProductListlength() > 0) {
            this.renderProductList()
        } else {
            this.renderEmptyCatalog();
        }
                   
    },
    
    btnAddEvent() {
        this.catalogDiv.addEventListener('click', event => this.addToCart(event));
    },

    addToCart(event) {
        if (!event.target.classList.contains('btnAddToCart')) return;
        const itemId = +event.target.dataset.itemId;
        const productToAdd = this.productList.find((catalogProduct) => catalogProduct.itemId === itemId);
        this.customCart.addToCart(productToAdd);
    },    

    
    getProductListlength() {
        return this.productList.length;
    },

    renderProductList() {
        this.catalogDiv.innerHTML = '';
        this.productList.forEach(item => {
            this.catalogDiv.insertAdjacentHTML('beforeEnd', this.renderCatalogItem(item))
        });
    },

    renderCatalogItem(item) {
        return `<div class="catalogProduct">
                <h4>${item.itemName}</h4>
                <p>${item.itemPrice} руб.</p>
                <button class="btnAddToCart" data-item-id="${item.itemId}">Добавить в корзину</button>
                </div>
    `},

    renderEmptyCatalog() {
        this.catalogDiv.innerHTML = '';
        this.catalogDiv.insertAdjacentHTML('beforeEnd', `Каталог товаров пуст.`);
    },
};

const customCart = {
    cartDiv: null,
    clearBtn: null,
    allItemsInCart: [
        {
            itemId: 11111,
            itemName: 'Кеды "Converse"',
            itemPrice: 7999,
            itemQuantity: 1,
        }
    ],
    // countCartPrice() {
    //     return this.allItemsInCart.reduce((totalPrice, cartItem) =>
    //         totalPrice + cartItem.itemPrice * cartItem.itemQuantity, 0);
    // },
    init(cartList, clearBtn) {
        this.cartDiv = document.querySelector(`.${cartList}`);
        this.clearBtn = document.querySelector(`.${clearBtn}`);
        this.clearCartBtn();
        this.render();
    },

    clearCartBtn() {
        this.clearBtn.addEventListener('click', this.clearCart.bind(this));
    },
    
    clearCart() {
        this.allItemsInCart = [];
        this.render();
    },

    render() {
        if (this.getAllItemsInCart() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }         
    },
    
    addToCart(catalogProduct) {
        if (catalogProduct) {
            const findInCart = this.allItemsInCart.find(({itemId}) => catalogProduct.itemId === itemId);
            if (findInCart) {
                findInCart.itemQuantity++;
            } else {
                this.allItemsInCart.push({...catalogProduct, itemQuantity: 1});
            }
            this.render();
            } else {
                alert('Ошибка, товар не добавлен');
            }
    },        

    getAllItemsInCart() {
        return this.allItemsInCart.length;
    },

    renderEmptyCart() {
        this.cartDiv.innerHTML = '';
        this.cartDiv.insertAdjacentHTML('beforeend', 'Ваша корзина пуста.');
    },

    renderCartList() {
        this.cartDiv.innerHTML = '';
        this.allItemsInCart.forEach(item => {
            this.cartDiv.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div class="item">
        <h4>${item.itemName}</h4>
        <p>${item.itemPrice} руб.</p>
        <p>${item.itemQuantity} шт.</p>
    </div>`;
    },

};   

catalog.init('catalog', customCart);
customCart.init('cartList', 'clearBtn');