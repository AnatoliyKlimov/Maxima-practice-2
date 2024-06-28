import '../header/header.css';

function Header() {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="top-header">
                        <div className="sale-block">
                            <p className="sale-line-descr">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <a href='#' className="sale-link">ShopNow</a>
                        </div>
                        <select className='lang-list'>
                            <option className='lang-list-item'>Russian</option>
                            <option className='lang-list-item'>English</option>
                        </select>
                    </div>
                    <div className="bottom-header">
                        <h1 className="logo">Exclusive</h1>
                        <nav className="navigation">
                            <a href="#" className="navigation-link">Home</a>
                            <a href="#" className="navigation-link">Contact</a>
                            <a href="#" className="navigation-link">About</a>
                            <a href="#" className="navigation-link">Sign Up</a>
                        </nav>
                        <div className="search-block">
                            <div className="form-search">
                                <input className="search-input" placeholder='What are you looking for?'></input>
                                <button className='search-btn'></button>
                            </div>
                            <div className="icons-block">
                                <a href="#" className='like'></a>
                                <a href="#" className='cart'></a>
                                <a href="#" className='user'></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );

}

export default Header;
