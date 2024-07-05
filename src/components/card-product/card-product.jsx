import '../card-product/card-product.css';


function CardProduct(props) {

    return (
        <>
            <div className='card-product' {...props.ref}>
                <div className="card-product-main-block">
                        <div className="card-product-main-block__rect">-{props.discount}%</div>
                        <div className="card-product-main-block__img-block">
                            
                          <img className='card-product-main-block__img' src={props.img} alt={props.name}/>  
                        </div>
                        
                        <div className="card-product-main-block-btns">
                            <button className="card-product-main-btns card-product-btn-like"></button>
                            <button className="card-product-main-btns card-product-btn-view"></button>
                        </div>
                    <button className='card-product-add-cart'>Add To Cart</button>
                </div>
                <div className="card-product-secondary-block">
                    <p className="card-product-name">{props.name}</p>
                    <div className="card-product-price">
                        <p className="card-product-price-discount">${props.discount}</p>
                        <p className="card-product-price-no-discount">${props.discount}</p>
                    </div>
                    <div className="card-product-raiting">
                        <div className="card-product-raiting__stars">
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                            <img src="/img/svg/star.svg" alt="Raiting" />
                        </div>
                        <p className="card-product-raiting__value">({props.raiting})</p>
                    </div>
                </div>
            </div>
        </>
    )


}

export default CardProduct;