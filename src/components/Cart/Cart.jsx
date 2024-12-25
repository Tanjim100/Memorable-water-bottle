import propTypes from 'prop-types';
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <ul>
                {
                    cart.map(item => 
                        <div>
                            <li>{item.name}</li>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};


Cart.propTypes = {
    cart: propTypes.array.isRequired,
    handleRemoveFromCart: propTypes.func.isRequired

}

export default Cart;