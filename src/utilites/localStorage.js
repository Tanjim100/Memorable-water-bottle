
const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString) return JSON.parse(storedCartString);

    return [];
}


const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const addCartToLS = id => {
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLS(cart);
}


export { addCartToLS, getStoredCart }



// to add into local storage the value or array is stored as string, so stringify is needed to store, so 'JSON.stringify' is used

// to get values from the local storage we need to parse from the local storage using 'JSON.parse'


