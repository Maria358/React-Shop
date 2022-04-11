import React from 'react';
import styles from '../styles/navbar.css';
import { useState } from 'react';
import Modal from './Modal';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GiBeachBag } from 'react-icons/gi';
import { GET_PRODUCTS_BY_CATEGORY } from '../query/product';
import { useQuery } from '@apollo/client';
import { ProductContext } from '../context/productList';
import { Link } from 'react-router-dom';



const NavBar = ({ refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: all } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            "input": {
                "title": "all"
            }
        }
    });
    const { data: tech } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            "input": {
                "title": "tech"
            }
        }
    });
    const { data: clothes } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            "input": {
                "title": "clothes"
            }
        }
    });

    function handleLinkClick(e) {
        e.preventDefault();
        switch (e.target.id) {
            case 'all':
                refetch({
                    'input': {
                        'title': 'all'
                    }, all

                });
                break;
            case 'tech':
                refetch({
                    'input': {
                        'title': 'tech'
                    }, tech

                })
                break;
            case 'clothes':
                refetch({
                    'input': {
                        'title': 'clothes'
                    }, clothes

                })
                break;
        }
    };

    const products = React.useContext(ProductContext);
    const currencies = products.map((el) => el.prices).reduce((prev, el) => {
        return el.map(el => {
            return {
                label: el.currency.label,
                symbol: el.currency.symbol,
                amount: el.amount,
            }
        });
    }, []);

    function handleOption(e) {

    }

    return (
        <nav className={styles}>
            <div>
                <ul className={styles.ul} onClick={(e) => handleLinkClick(e)}>
                    <li key="all"><Link to="/" id="all" className="active">ALL</Link></li>
                    <li key="tech"><Link to="/tech" id="tech">TECH</Link></li>
                    <li key="clothes"><Link to="/clothes" id="clothes">CLOTHES</Link></li>
                </ul>
            </div>
            <div>
                <GiBeachBag className="nav-icon bag" />
            </div>
            <div className="icons-box">

                {/* <select onClick={(e) => handleOption(e)}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="AUD">AUD</option>
                    <option value="JPY">JPY</option>
                    <option value="RUB">RUB</option>
                </select> */}
                <AiOutlineShoppingCart className="nav-icon" onClick={() => setIsOpen(true)} />
            </div>
            {isOpen && <div>
                <Modal onClose={() => setIsOpen(false)} />
            </div>}
        </nav>
    )
}

export default NavBar;
