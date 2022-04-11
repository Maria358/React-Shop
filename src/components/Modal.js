import styles from '../styles/modal.css';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../common/localStorage';

const Modal = ({ onClose }) => {
    const navigate = useNavigate();
    const cartItems = getLocalStorage('cart');

    const sum = cartItems.reduce((prevItem, current) => {
        const prices = current.product.prices.filter(price => price.currency.label === 'USD')[0].amount;
        return prices + prevItem
    }, 0);

    return (
        <div className={styles}>
            <div id="myModal" className="modal" onClick={onClose} >
                <div className="modal-content">
                    <Cart />
                    <div className="modal-footer">
                        <div>
                            <p>Total</p>
                        </div>
                        <div>
                            {`$ ${sum}`}
                        </div>
                    </div>
                    <div className="btns-container">
                        <button className="view-btn" onClick={() => navigate('/cart')}>VIEW BAG</button>
                        <button className="check-btn" onClick={onClose}>CHECK OUT</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Modal;