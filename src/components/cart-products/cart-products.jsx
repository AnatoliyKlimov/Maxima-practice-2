import './cart-products.css'


function CartProducts(props) {

    let total = props.count*props.price;

    return (
        <>
            <div className='cart_product'>
                <div className='cart'>
                    <div className='product_name'>
                        <div className="product-icon">
                            <img className='product-img' src={props.img} alt={props.name} />
                            <button id = {props.id} className='del-product' onClick={(e)=>props.removeCart(e, props.price)}></button>
                        </div>
                        <span>{props.name}</span>
                    </div>
                    <span className='price'>$ {props.price}</span>
                    <div className='quantity'>{props.count}</div>
                    <span>$ {total}</span>
                </div>
            </div>
        </>
    )
}

export default CartProducts;