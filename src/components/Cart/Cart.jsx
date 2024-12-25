
const Cart = ({cart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <ul>
                {
                    cart.map(item => <li>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;