import '../todays-section/todays-section.css';
import TitleSection from '../../../components/title-section/title-section';
import SaleTimerBlock from '../../../components/sale-timer-block/sale-timer-block';
import ScrollBtns from '../../../components/scroll-btns/scroll-btns';
import CardProduct from '../../../components/card-product/card-product';
import data from '../../../components/app/data';


function TodaysSection() {
    const main_title = "Today’s";
    const secondary_title = "Flash Sales";

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
                    <div className="todays-section">
                        <TitleSection
                            main_title={main_title}
                            secondary_title={secondary_title}
                            sale_timer_block={<SaleTimerBlock />}
                            scrooll_btns={<ScrollBtns />}
                        />
                        <div className="flash-sales-products">
                            {product}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TodaysSection;