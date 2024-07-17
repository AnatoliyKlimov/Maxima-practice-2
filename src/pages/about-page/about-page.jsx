import '../about-page/about-page.css';
import '../main-page/featured-section/featured-section.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import dataS from './data/statistics-data.js';
import dataW from './data/workers-data.js'
import StatisticsBlock from '../../components/statistics-block/statistics-block.jsx';
import WorkersCard from '../../components/workers-card/workers-card.jsx';

function AboutPage() {

    let StatisticsCards = dataS.map((elem) => {
        return <StatisticsBlock
            key={elem.id}
            img={elem.img}
            imgA={elem.imgA}
            descr={elem.descr}
            numbers={elem.numbers}
        />
    });

    let WorkersCards = dataW.map((elem) => {
        return <WorkersCard
            key={elem.id}
            img={elem.img}
            name={elem.name}
            specialization={elem.specialization}
            twitter={elem.twitter}
            instagram={elem.instagram}
            linkedln={elem.linkedln}
        />
    });

    return (
        <>
            <Header />
            <div className="container">
                <section className='our-story-section'>
                    <p className="home-page">Home / <span className="current-page">About</span></p>
                    <div className="our-story-block">
                        <div className="our-story-block-left">
                            <ul className="our-story-block-list">
                                <li className="our-story-block-item-main">Our Story</li>
                                <li className="our-story-block-item-secondary our-story-block-item-secondary__pd">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</li>
                                <li className="our-story-block-item-secondary">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</li>
                            </ul>
                        </div>
                        <div className="our-story-block-right"></div>
                    </div>
                </section>
                <section className="statistics-section">
                    {StatisticsCards}
                </section>
                <section className="workers-section">
                    <div className="workers-cards">
                        {WorkersCards}
                    </div>
                    <div className="workers-section-switches">
                        <div className="workers-section-switches__block">
                            <button className="workers-section-switches__btn"></button>
                        </div>
                        <div className="workers-section-switches__block">
                            <button className="workers-section-switches__btn"></button>
                        </div>
                        <div className="workers-section-switches__block">
                            <button className="workers-section-switches__btn"></button>
                        </div>
                        <div className="workers-section-switches__block">
                            <button className="workers-section-switches__btn"></button>
                        </div>
                        <div className="workers-section-switches__block">
                            <button className="workers-section-switches__btn"></button>
                        </div>
                    </div>
                </section>
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
            <Footer />
        </>
    )
}

export default AboutPage;