import '../this-month-section/this-month-section.css';
import TitleSection from '../../../components/title-section/title-section';
import CardProduct from '../../../components/card-product/card-product';
import data from '../../../components/app/data';
import ViewButton from '../../../components/view-button/view-button';

function ThisMonthSection() {
    const main_title = "This Month";
    const secondary_title = "Best Selling Products";
    const ViewAllProducts_btn = "View All";

    let product = data.map((elem, index) => {
        if (index < 4) {
            return <CardProduct
                key={index}
                discount={elem.discount}
                img={elem.img}
                name={elem.name}
                raiting={elem.raiting}
            />
        }
    });

    return (
        <>
            <section>
                <div className="container">
                    <div className="this-month-section">
                        <TitleSection
                            main_title={main_title}
                            secondary_title={secondary_title}
                            scrooll_btns={<ViewButton
                                name={ViewAllProducts_btn}
                            />}
                        />
                        <div className="browse-by-category">
                            {product}
                        </div>
                        <div className="marketing">
                            <div className="marketing-left">
                                <p className='marketing-left-descr'>Categories</p>
                                <p className="marketing-left-title">Enhance Your Music Experience</p>
                                <div className="marketing-left-timer">
                                    <div className="marketing-left-timer-block-value">
                                        <p className="marketing-timer-block-value">23</p>
                                        <p className="marketing-timer-block-descr">Hours</p>
                                    </div>
                                    <div className="marketing-left-timer-block-value">
                                        <p className="marketing-timer-block-value">05</p>
                                        <p className="marketing-timer-block-descr">Days</p>
                                    </div>
                                    <div className="marketing-left-timer-block-value">
                                        <p className="marketing-timer-block-value">59</p>
                                        <p className="marketing-timer-block-descr">Minutes</p>
                                    </div>
                                    <div className="marketing-left-timer-block-value">
                                        <p className="marketing-timer-block-value">35</p>
                                        <p className="marketing-timer-block-descr">Seconds</p>
                                    </div>
                                   
                                </div>
                                <div className="marketing-left-by-now">
                                    <button className="marketing-left-by-now__btn">Buy Now!</button>
                                </div>
                                
                            </div>
                            <div className="marketing-right">
                                <img className='marketing-righ-img' src="/img/png/Frame694.png" alt="product 93" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThisMonthSection;