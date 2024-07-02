import '../menu-list-categories-section/menu-list-categories-section.css'

function MenuListCategoriesSection() {

    return (
        <>
            <section>
                <div className="container">
                    <div className="menu-list-categories-section">
                        <div className="menu-list-left-block">
                            <ul className="list-categories">
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Woman’s Fashion</a>
                                    <div className="link-categories-arr"></div>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Men’s Fashion</a>
                                    <div className="link-categories-arr"></div>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Electronics</a>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Home & Lifestyle</a>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Medicine</a>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Sports & Outdoor</a>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Baby’s & Toys</a>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Groceries & Pets</a>
                                </li>
                                <li className="list-categories-item">
                                    <a href="#" className="link-categories">Health & Beauty</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-list-right-block">
                            <div className="marketing-banner">
                                <div className="marketing-banner-block">
                                    <div className="marketing-product-descr">
                                        <div className="marketing-product">
                                            <div className="marketing-product-icon"></div>
                                            <div className="marketing-product-img-descr">iPhone 14 Series</div>
                                        </div>
                                        <div className="marketing-product-sale">Up to 10% off Voucher</div>
                                        <div className="marketing-product-link">
                                            <a href="#" className='marketing-product-link-descr'>Shop Now</a>
                                            <div className="marketing-product-link-img"></div>
                                        </div>
                                    </div>
                                    <div className="marketing-product-img"></div>
                                </div>


                                <div className="marketing-switch-products">
                                    <button className="marketing-switch-btn"></button>
                                    <button className="marketing-switch-btn"></button>
                                    <button className="marketing-switch-btn"></button>
                                    <button className="marketing-switch-btn"></button>
                                    <button className="marketing-switch-btn"></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuListCategoriesSection;