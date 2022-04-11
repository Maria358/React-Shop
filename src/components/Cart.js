import CartItem from "./CartItem";
import cart from "../styles/cart.css";
import { getLocalStorage } from "../common/localStorage";

const Cart = () => {
    const cartItems = getLocalStorage('cart');

    return (
        <div className={cart}>
            <p className="cart-title">My Bag: <span>{`${cartItems.length} items`}</span></p>
            {
                cartItems.map((item, key) => <CartItem item={item} key={key} />)
            }
        </div>
    );
}

export default Cart;