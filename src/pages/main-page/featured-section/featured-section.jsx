import '../featured-section/featured-section.css';
import TitleSection from '../../../components/title-section/title-section';

function FeatureSection() {
    const main_title = "Featured";
    const secondary_title = "New Arrival";

    return (
        <>
            <section>
                <div className="container">
                    <div className="featured-section">
                        <TitleSection
                            main_title={main_title}
                            secondary_title={secondary_title}
                        />
                        <div className="featured-section-blocks">
                            <div className="featured-section-blocks-left">
                                <div className="featured-section-blocks-descr">
                                    <p className="featured-section-blocks-left-name">PlayStation 5</p>
                                    <p className="featured-section-blocks-left-descr">Black and White version of the PS5 coming out on sale.</p>
                                    <a href="#" className="featured-section-blocks-left-link">Shop Now</a>
                                </div>
                            </div>
                            <div className="featured-section-blocks-right">
                                <div className="featured-section-blocks-right-up featured-section-blocks-descr">
                                    <p className="featured-section-blocks-left-name">Women’s Collections</p>
                                    <p className="featured-section-blocks-left-descr">Featured woman collections that give you another vibe..</p>
                                    <a href="#" className="featured-section-blocks-left-link">Shop Now</a>
                                </div>
                                <div className="featured-section-blocks-right-down">
                                    <div className="featured-section-blocks-right-d featured-section-blocks-right-down-left">
                                        <p className="featured-section-blocks-left-name">Speakers</p>
                                        <p className="featured-section-blocks-left-descr">Amazon wireless speakers</p>
                                        <a href="#" className="featured-section-blocks-left-link">Shop Now</a>
                                    </div>
                                    <div className="featured-section-blocks-right-d featured-section-blocks-right-down-right">
                                        <p className="featured-section-blocks-left-name">Perfume</p>
                                        <p className="featured-section-blocks-left-descr">GUCCI INTENSE OUD EDP</p>
                                        <a href="#" className="featured-section-blocks-left-link">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="delevery-block-main">
                            <div className="delevery-block-secondary">
                                <div className="delevery-block-img delevery-img"></div>
                                <p className="delevery-title">FREE AND FAST DELIVERY</p>
                                <p className="delevery-descr">Free delivery for all orders over $140</p>
                            </div>
                            <div className="delevery-block-secondary">
                                <div className="delevery-block-img contacts-img"></div>
                                <p className="delevery-title">24/7 CUSTOMER SERVICE</p>
                                <p className="delevery-descr">Friendly 24/7 customer support</p>
                            </div>
                            <div className="delevery-block-secondary">
                                <div className="delevery-block-img  security-img"></div>
                                <p className="delevery-title">MONEY BACK GUARANTEE</p>
                                <p className="delevery-descr">We reurn money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureSection;