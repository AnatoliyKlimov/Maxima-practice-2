import './cart-products.css'


function CartProducts(props) {

    return (
        <>
            <div className='cart_product'>
                <div className='cart'>
                    <div className='product_name'>
                        <div className="product-icon">
                            <img className='product-img' src={props.img} alt={props.name} />
                            <button className='del-product'></button>
                        </div>
                        <span>{props.name}</span>
                    </div>
                    <span className='price'>$ {props.price}</span>
                    <div className='quantity'>2</div>
                    <span>650</span>
                </div>
            </div>
        </>
    )
}

export default CartProducts;