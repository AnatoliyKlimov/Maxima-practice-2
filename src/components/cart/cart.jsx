import '../cart/cart.css'
import monitor from '../cart/img/g27cq4-500x500 1.png'
function Cart() {

    return (
        <>
            <div className="cart_container">
                <div className='cart_menu'>
                    <span>Home / <b>Cart</b></span>
                </div>
                <div className='cart_top'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className='cart_product'>
                    <div className='cart'>
                        <div className='product_name'>
                        <img src={monitor} alt="" />
                        <span>LCD Monitor</span>
                        </div>
                        <span className='price'>$650</span>
                        <div className='quantity'>----</div>
                        <span>650</span>
                    </div>
                </div>
                <div className='cart_product'>
                    <div className='cart'>
                        <div className='product_name'>
                        <img src={monitor} alt="" />
                        <span>LCD Monitor</span>
                        </div>
                        <span className='price'>$650</span>
                        <div className='quantity'>----</div>
                        <span>650</span>
                    </div>
                </div>
                <div className='cart_bottom_menu'>
                    <button className='cart_button'>Return to Shop</button>
                    <button  className='cart_button'>Update Cart</button>
                </div>
                <div className='cart_bottom'>
                    <div className='cart_bottom_left'><input className='cart_code' type="text" value={'Coupon Code'} /><button className='cart_apply'>Apply Coupon</button></div>
                    <div className='cart_bottom_right'>
                        <p className='span_total'>Cart Total</p>
                        <div className='total_container'>
                        <div className='total_sub'><span>Subtotal</span>
                        <span>$1750</span>
                        </div>
                        <div className='total_sub'><span>Shipping</span>
                        <span>Free</span>
                        </div>
                        <div className='total_sub total'><span>Total</span>
                        <span>$1750</span>
                        </div>
                        </div>
                        <button className='cart_checkout'>Procees to checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;