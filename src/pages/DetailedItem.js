import { useParams } from "react-router";
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from '../query/product';
import styles from "../styles/detailedInfo.css";
import { getLocalStorage, setLocalStorage } from '../common/localStorage';


const DetailedItem = () => {
    const { id } = useParams();
    const { data: item } = useQuery(GET_PRODUCT_BY_ID, {
        variables: { id: id },
    });

    const correctDescription = (item) => {
        return item.product.description.replace(/<[^>]*>/gm, '');
    };


    const calcPrice = (item) => {
        return item.product.prices.filter(price => price.currency.label === 'USD')[0].amount;
    };

    const handleClick = (item) => {
        let cart = [];

        if (getLocalStorage('cart')) {
            cart = getLocalStorage('cart');
        };

        cart.push(item);
        setLocalStorage('cart', cart);
    };

    return (
        <div className={styles}>
            {item && <div className="info-container">
                <div>
                    <img className="detail-photo" src={item.product.gallery[0]} />
                </div>
                <div className="info-box">
                    <p className="brand">{item.product.brand}</p>
                    <p className="name">{item.product.name}</p>
                    <p className="title">Size:</p>
                    <div className="sizes-box">
                        <button>XS</button>
                        <button>X</button>
                        <button>M</button>
                        <button>L</button>
                    </div>
                    <p className="title">Price:</p>
                    <p className="amount">${calcPrice(item)}</p>
                    <button className="add-btn" onClick={() => handleClick(item)}>ADD TO CART</button>
                    <p className="description">{correctDescription(item)}</p>
                </div>
            </div>}
        </div>
    )

}

export default DetailedItem;