const initStore = {
    countProducts: 0,
    totalPrice: 0,
    priceItem: 0,
    basketProducts: [],
    wishListProducts: [],
    wishListCountProducts: 0,
};


function reducer(store = initStore, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...store,
                countProducts: store.countProducts + 1,
                totalPrice: store.totalPrice + action.price,
                basketProducts: store.basketProducts.concat(action.data),
            };
        case 'REMOVE_PRODUCT':
            return {
                ...store,
                countProducts: store.countProducts - 1,
                totalPrice: store.totalPrice - action.price,
                basketProducts: store.basketProducts.filter(elem => elem.id !== action.id),
            };
        case 'ADD_PRODUCT_WISHLIST':
            return {
                ...store,
                wishListCountProducts: store.wishListCountProducts + 1,
                wishListProducts: store.wishListProducts.concat(action.data),
            };
        case 'REMOVE_PRODUCT_WISHLIST':
            return {
                ...store,
                wishListCountProducts: store.wishListCountProducts - 1,
                wishListProducts: store.wishListProducts.filter(elem => elem.id !== action.id),
            };
        default: return store;
    }

}

export { initStore, reducer };