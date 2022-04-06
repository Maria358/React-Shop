import React from 'react';
import styles from '../styles/navbar.css';
import { useState } from 'react';
import Modal from './Modal';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GiBeachBag } from 'react-icons/gi';
import { GET_PRODUCTS_BY_CATEGORY } from '../query/product';
import { useQuery } from '@apollo/client';


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

    return (
        <nav className={styles}>
            <div>
                <ul className={styles.ul} onClick={(e) => handleLinkClick(e)}>
                    <li key="all"><a id="all" className="active">ALL</a></li>
                    <li key="tech"><a id="tech">TECH</a></li>
                    <li key="clothes"><a id="clothes">CLOTHES</a></li>
                </ul>
            </div>
            <div>
                <GiBeachBag className="nav-icon bag" />
            </div>
            <div className="icons-box">
                <BsCurrencyDollar className="nav-icon" />
                <AiOutlineShoppingCart className="nav-icon" onClick={() => setIsOpen(true)} />
            </div>
            {isOpen && <div>
                <Modal onClose={() => setIsOpen(false)} />
            </div>}
        </nav>
    )
}

export default NavBar;
