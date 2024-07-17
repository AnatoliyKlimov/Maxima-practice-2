import styles from './product-details-page.module.css'
import Original from "../../components/assets/Original.png"
import small1 from "../../components/assets/small1.png"
import small2 from "../../components/assets/small2.png"
import small3 from "../../components/assets/small3.png"
import small4 from "../../components/assets/small4.png"
import React, { useState } from 'react';

import RadioButton from '../../components/radio-button/radioButton'

import TitleSection from '../../components/title-section/title-section';
import CardProduct from '../../components/card-product/card-product';
import data from '../../components/app/data';
import { useRef } from 'react';


export default function ProductDetails() {
    const main_title = "Related Item";
    const listRef = useRef(null);
    const [activeButton, setActiveButton] = useState('');
    const [count, setCount] = useState(0);
    const [isActivePlus, setIsActivePlus] = useState(false);
    const [isActiveMenus, setIsActiveMenus] = useState(false);
    const [isActiveLike, setIsActiveLike] = useState(false);

    let product = data.map((elem, index) => {
        return <CardProduct
            key={index}
            discount={elem.discount}
            img={elem.img}
            name={elem.name}
            raiting={elem.raiting}
        />
    })

    const handleButtonClick = (size) => {
        setActiveButton(size);
    };
    const increment = () => {
        setCount(count + 1);
        setIsActivePlus(true);
        setIsActiveMenus(false);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setIsActiveMenus(true);
            setIsActivePlus(false);
        }
    };

    const handleLikeClick = () => {
        setIsActiveLike(!isActiveLike);
    };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.path}>
                    <span className={styles.span}>Account &nbsp; &nbsp;/&nbsp; &nbsp;</span>
                    <span className={styles.span}>Gaming &nbsp; &nbsp;/</span>
                    <p className={styles.paragraph}>&nbsp; &nbsp;Havic HV G-92 Gamepad</p>
                </div>
                <div className={styles.blockCentral}>
                    <div className={styles.miniatures}>
                        <div><img className={styles.min} src={small1} alt="gamepad" /></div>
                        <div><img className={styles.min} src={small2} alt="gamepad" /></div>
                        <div><img className={styles.min} src={small3} alt="gamepad" /></div>
                        <div><img className={styles.min} src={small4} alt="gamepad" /></div>
                    </div>
                    <div className={styles.bigImage}>
                        <img className={styles.big} src={Original} alt="gamepad" />
                    </div>
                    <div className={styles.specification}>
                        <h2 className={styles.title}>Havic HV G-92 Gamepad</h2>
                        <div className={styles.rating}>
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <p className={styles.raiting__value}>(150 Reviews)&nbsp; |&nbsp;</p>
                            <p className={styles.greenText}> In Stock</p>
                        </div>
                        <p className={styles.price}>$192.00</p>
                        <p className={styles.context}>
                            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                            for easy bubble free install & mess free removal Pressure sensitive.
                        </p>
                        <div className={styles.line} />
                        <div className={styles.colors}>
                            <p className={styles.radioColors}>Colors: &nbsp;&nbsp;</p>
                            <RadioButton />
                        </div>
                        <div className={styles.size}>
                            <p className={styles.buttonSize}>Size: &nbsp;&nbsp;</p>
                            <button
                                className={`${styles.button} ${activeButton === 'XS' ? styles.isActive : ''}`}
                                onClick={() => handleButtonClick('XS')}
                            >
                                XS
                            </button>
                            <button
                                className={`${styles.button} ${activeButton === 'S' ? styles.isActive : ''}`}
                                onClick={() => handleButtonClick('S')}
                            >
                                S
                            </button>
                            <button
                                className={`${styles.button} ${activeButton === 'M' ? styles.isActive : ''}`}
                                onClick={() => handleButtonClick('M')}
                            >
                                M
                            </button>
                            <button
                                className={`${styles.button} ${activeButton === 'L' ? styles.isActive : ''}`}
                                onClick={() => handleButtonClick('L')}
                            >
                                L
                            </button>
                            <button
                                className={`${styles.button} ${activeButton === 'XL' ? styles.isActive : ''}`}
                                onClick={() => handleButtonClick('XL')}
                            >
                                XL
                            </button>
                        </div>
                        <div className={styles.quantity}>
                            <div className={styles.countBtns}>
                                <button className={`${styles.menus} ${isActiveMenus ? 'tapActive' : ''}`} onClick={decrement}>-</button>
                                <div className={styles.count}>{count}</div>
                                <button className={`${styles.plus} ${isActivePlus ? 'tapActive' : ''}`} onClick={increment}>+</button>
                            </div>
                            <button className={styles.byNow}>Buy Now</button>
                            <button className={`${styles.like} ${isActiveLike ? 'tapActive' : ''}`} onClick={handleLikeClick}></button>
                        </div>
                        <div className={styles.delivery}>
                            <div className={styles.free}>
                                <div className={styles.iconDelivery} />
                                <div className={styles.txtBlock}>
                                    <h3>Free Delivery</h3>
                                    <a href="#">Enter your postal code for Delivery Availability</a>
                                </div>
                            </div>
                            <div className={styles.line} />
                            <div className={styles.return}>
                                <div className={styles.iconReturn} />
                                <div className={styles.txtBlock}>
                                    <h3>Return Delivery</h3>
                                    <span>Free 30 Days Delivery Returns.&nbsp;</span>
                                    <a href="#">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className={styles.our_products_section}>
                            <TitleSection main_title={main_title} />
                            <div className="browse-by-category" ref={listRef}>
                                {product}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}