import { getLocalStorage } from "../common/localStorage";

const CartPage = () => {
    const cartItems = getLocalStorage('cart');
    return (
        <div className="cart-items-box">
            <p className="cart-title">CART</p>
            <hr />
            {
                cartItems.map((item, key) => {
                    return (
                        <div className="card-item" key={key}>
                            <div>
                                <p className="item-brand">{item.product.brand}</p>
                                <p className="item-name">{item.product.name}</p>
                                <p className="item-price">$100</p>
                                <div className="card-sizes-box">
                                    <button>S</button>
                                    <button>M</button>
                                </div>
                            </div>
                            <div className="btns-container">
                                <div className="btn-box">
                                    <button className="plus">+</button>
                                    <p>1</p>
                                    <button className="minus">-</button>
                                </div>
                                <div>
                                    <img className="card-photo" src={item.product.gallery[0]} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CartPage;