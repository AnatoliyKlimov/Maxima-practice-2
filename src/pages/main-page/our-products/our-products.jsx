import '../our-products/our-products.css';
import TitleSection from '../../../components/title-section/title-section';
import CardProduct from '../../../components/card-product/card-product';
import data from '../../../components/app/data';
import ViewButton from '../../../components/view-button/view-button';
import ScrollBtns from '../../../components/scroll-btns/scroll-btns';
import { useRef} from 'react';

function OurProducts() {
    const main_title = "Our Products";
    const secondary_title = "Explore Our Products";
    const ViewAllProducts_btn = "View All Products";
    const listRef = useRef(null);
    
    function scrollContainerBy(step) {
        const { current } = listRef;
        current.scrollBy({ left: step, behavior: 'smooth' });
    }

    let product = data.map((elem, index) => {
            return <CardProduct
                key={index}
                discount={elem.discount}
                img={elem.img}
                name={elem.name}
                raiting={elem.raiting}
            />
        })
    return (
        <>
            <section>
                <div className="container">
                    <div className="our-products-section">
                        <TitleSection
                            main_title={main_title}
                            secondary_title={secondary_title}
                            scrooll_btns={<ScrollBtns
                                left_btn={scrollContainerBy}
                                right_btn={scrollContainerBy}

                            />}
                        />
                        <div className="browse-by-category" ref={listRef}>
                            {product}
                        </div>
                        <div className="browse-by-category">
                            {product}
                        </div>
                        <div className="our-products__view-btn">
                            <ViewButton name={ViewAllProducts_btn} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProducts;