import '../todays-section/todays-section.css';
import TitleSection from '../../../components/title-section/title-section';
import SaleTimerBlock from '../../../components/sale-timer-block/sale-timer-block';
import ScrollBtns from '../../../components/scroll-btns/scroll-btns';
import CardProduct from '../../../components/card-product/card-product';
import data from '../../../components/app/data';
import ViewButton from '../../../components/view-button/view-button';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function TodaysSection() {
    const main_title = "Today’s";
    const secondary_title = "Flash Sales";
    const ViewAllProducts_btn = "View All Products";
    const listRef = useRef(null);
    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);
    const basketProducts = useSelector(store => store.basketProducts);
    const dispatch = useDispatch();

    function scrollContainerBy(step) {
        const { current } = listRef;
        current.scrollBy({ left: step, behavior: 'smooth' });
    }

    function addProduct(data) {
        dispatch({
            type: 'ADD_PRODUCT',
            id: data.id,
            data: data,
            price: data.price
        });
    }
    let product = data.map((elem, index) => {

        return <CardProduct
            key={index}
            elem = {elem}
            discount={elem.discount}
            img={elem.img}
            name={elem.name}
            raiting={elem.raiting}
            addCart = {addProduct}
        />
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
                            scrooll_btns={<ScrollBtns
                                left_btn={scrollContainerBy}
                                right_btn={scrollContainerBy}
                            />}
                        />
                        <div className="flash-sales-products" ref={listRef}>
                            {product}
                        </div>
                        <div className="flash-sales-products__view-btn">
                            <ViewButton name={ViewAllProducts_btn} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TodaysSection;