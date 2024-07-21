import { NavLink } from 'react-router-dom';
import '../footer/footer.css';

function Footer() {

    return (
        <>
            <footer>
                <div className="container">
                    <section className="footer">
                        <div className="columns">
                            <ul className="col">
                                <li className="item-first-title">Exclusive</li>
                                <li className="item-second-title top">Subscribe</li>
                                <li className='send-email'>
                                    <p className='descr'>Get 10% off your first order</p>
                                    <div className="email-form">
                                        <input className="email-input" placeholder='Enter your email'></input>
                                        <button className='send-email-btn'></button>
                                    </div>
                                </li>
                            </ul>
                            <ul className="col supp-col">
                                <li className="item-second-title">Support</li>
                                <li className="descr-block">
                                    <p className="descr">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                                    <p className="descr">exclusive@gmail.com</p>
                                    <p className="descr">+88015-88888-9999</p>
                                </li>
                            </ul>
                            <ul className="col acc-col">
                                <li className="item-second-title">Account</li>
                                <li className="descr-block">
                                    <a href="#" className='descr'>My Account</a>
                                    <a href="#" className='descr'>Login / Register</a>
                                    <NavLink to="/cart" className='descr'>Cart</NavLink>
                                    <NavLink to="/wishlist" className='descr'>Wishlist</NavLink>
                                    <a href="#" className='descr'>Shop</a>
                                </li>
                            </ul>
                            <ul className="col quick-col">
                                <li className="item-second-title">Quick Link</li>
                                <li className="descr-block">
                                    <a href="#" className='descr'>Privacy Policy</a>
                                    <a href="#" className='descr'>Terms Of Use</a>
                                    <a href="#" className='descr'>FAQ</a>
                                    <a href="#" className='descr'>Contact</a>
                                </li>
                            </ul>
                            <ul className="col">
                                <li className="item-second-title">Download App</li>
                                <li className="downloads">
                                    <p className="descr-download">Save $3 with App New User Only</p>
                                    <div className="download-app">
                                        <div className="links-app">
                                            <div className="qr-code"></div>
                                            <div className="download-links">
                                                <a href='#' className="google-play-link"></a>
                                                <a href='#' className="app-store-link"></a>
                                            </div>
                                        </div>

                                        <div className="social-network">
                                            <a href='#' className="net-img facebook"></a>
                                            <a href='#' className="net-img twitter"></a>
                                            <a href='#' className="net-img inst"></a>
                                            <a href='#' className="net-img linked"></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </section>  
                        <p className="copyright">© Copyright Rimel 2022. All right reserved</p>
                        
                </div>
            </footer>

        </>
    );

}

export default Footer;
