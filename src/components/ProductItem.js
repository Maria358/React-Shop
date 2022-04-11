import productItem from '../styles/productItem.css';
import { Link } from 'react-router-dom';

const ProductItem = ({ item }) => {
    const price = item.prices.filter(price => price.currency.label === 'USD');

    return (
        <Link to={`/info/${item.id}`}>
            <div className={productItem}>
                <div className="card">
                    <img className="photo" src={item.gallery[0]} />
                    <div className="text-box">
                        <p className="name">{item.name}</p>
                        <p className="amount">{price[0].amount}$</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ProductItem;