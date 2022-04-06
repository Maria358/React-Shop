import cart from "../styles/cart.css";

const CartItem = ({ item }) => {
    const calcPrice = (item) => {
        return item.product.prices.filter(price => price.currency.label === 'USD')[0].amount;
    };

    return (
        <section className={cart}>
            <div>
                <p>{item.product.brand}</p>
                <p>{item.product.name}</p>
                <p className="cart-item-price">${calcPrice(item)}</p>
            </div>
            <div>
                <img className="cart-photo" src={item.product.gallery[0]} />
            </div>
        </section>
    );
}

export default CartItem;