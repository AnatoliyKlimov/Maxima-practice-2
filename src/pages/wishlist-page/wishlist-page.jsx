import '../wishlist-page/wishlist-page.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TitleSection from '../../components/title-section/title-section';
import ViewButton from '../../components/view-button/view-button';
import CardProduct from '../../components/card-product/card-product';
import '../../components/title-section/title-section.css'
import data from '../../components/app/data.js';

function WishlistPage() {
    let count = 5;
    const secondary_title = "Flash Sales";
    const wishlist_btn_name = 'Move All To Bag';
    const just_btn_name = 'See All';

    let product = data.map((elem, index) => {
        return <CardProduct
            key={index}
            discount={elem.discount}
            img={elem.img}
            name={elem.name}
            raiting={elem.raiting}

        />
    });


    return (
        <>
            <div className="container">
                <section className="wishlist-section">
                    <div className="wishlist-title-block">
                        <h2 className="wishlist-section-title">Wishlist ({count})</h2>
                        <ViewButton name={wishlist_btn_name} />
                    </div>
                    <div className="wishlist-cards-products">{product}</div>
                </section>
                <section className="just-section">
                    <div className="wishlist-title-block">
                        <div className="wishlist-title-block just-title-block">
                            <div className="title-section-main-rect"></div>
                            <h2 className="wishlist-section-title">Just For You</h2>
                        </div>
                        <ViewButton name={just_btn_name} />
                    </div>
                    <div className="wishlist-cards-products">{product}</div>
                </section>
            </div>
        </>
    )
}

export default WishlistPage;