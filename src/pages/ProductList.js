import React from 'react';
import ProductItem from '../components/ProductItem';
import content from '../styles/content.css';
import { ProductContext } from './../context/productList';

const Content = () => {
    const products = React.useContext(ProductContext);

    return (
        <ProductContext.Consumer>{
            () =>
                <main className={content}>
                    {
                        products.map((product, key) => <ProductItem item={product} key={key} />)
                    }
                </main>
        }
        </ProductContext.Consumer>
    )
}
export default Content;