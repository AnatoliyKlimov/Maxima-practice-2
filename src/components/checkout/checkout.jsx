import '../checkout/checkout.css'
import monitor from '../checkout/img/g27cq4-500x500 1.png'
import VISA from '../checkout/img/Frame 834.png'
function Checkout() {

    return (
        <>
            <div className="checkout_container">
                <div className='cart_menu'>
                    <span>Account / My Account / Product / View Cart / <b>CheckOut</b></span>
                </div>
                <h2 className='checkout_text_main'>Billing Details</h2>
                <div className='checkout_main_container'>
                <div className='checkout_left'>
                  <div className='checkout_container_input'> <p className='checkout_input_name'>First Name</p> <input className='checkout_input' type="text" /></div> 
                  <div className='checkout_container_input'> <p className='checkout_input_name'>Company Name</p> <input className='checkout_input' type="text" /></div> 
                  <div className='checkout_container_input'> <p className='checkout_input_name'>Street Address</p> <input className='checkout_input' type="text" /></div> 
                  <div className='checkout_container_input'> <p className='checkout_input_name'>Apartment floor, etc (optional)</p> <input className='checkout_input' type="text" /></div> 
                  <div className='checkout_container_input'> <p className='checkout_input_name'>Town/City</p> <input className='checkout_input' type="text" /></div> 
                  <div className='checkout_container_input'> <p className='checkout_input_name'>Phone Number</p> <input className='checkout_input' type="text" /></div> 
                  <div className='checkout_container_input'> <p className='checkout_input_name'>Email Address</p> <input className='checkout_input' type="text" /></div> 
                </div>
                <div className='checkout_right'>
                    <div className='container_product_checkout'>
                        <div className='product_checkout'>
                         <div className='product_checkout_name_container'>  <img src={monitor} alt="monitor" /><span className='product_checkout_name'>LCD Monitor</span></div> 
                            <span className='product_checkout_price'>$650</span>
                        </div>
                        <div className='product_checkout'>
                         <div className='product_checkout_name_container'>  <img src={monitor} alt="monitor" /><span className='product_checkout_name'>LCD Monitor</span></div> 
                            <span className='product_checkout_price'>$650</span>
                        </div>
                        
                    </div>
                    <div className='container_total_checkout'>
                    <div className='product_container_total'>
                       <span className='product_checkout_name'>Subtotal:</span>
                        <span className='product_checkout_price'>$1750</span>
                        </div>
                        <div className='product_container_total'>
                       <span className='product_checkout_name'>Shipping:</span>
                        <span className='product_checkout_price'>Free</span>
                        </div>
                        <div className='product_container_total noneborder'>
                       <span className='product_checkout_name'>Total:</span>
                        <span className='product_checkout_price'>$1750</span>
                        </div>

                    </div>
                    <div className='container_pay_checkout'>
                        <div className='container_pay_checkout_left'>
                        <fieldset className='radio_checkout'>
  
  <div className='div_radio_checkout'>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label className='lable_radio_checkout' for="huey">Bank</label>
  </div>

  <div className='div_radio_checkout'>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label className='lable_radio_checkout' for="dewey">Cash on delivery</label>
  </div>
</fieldset>
                        </div>
                        <div className='container_pay_checkout_right'>
                            <img src={VISA} alt="VISA" />
                        </div>
                    </div>
                    <div className='container_coupon_checkout'>
                    <div className='cart_bottom_left'><input className='cart_code' type="text" value={'Coupon Code'} /><button className='cart_apply'>Apply Coupon</button></div>
                    <button className='cart_apply place_order_button'>Place order</button>
                    </div>
                 
                </div>
                </div>
              </div>
        </>
    )
}

export default Checkout;