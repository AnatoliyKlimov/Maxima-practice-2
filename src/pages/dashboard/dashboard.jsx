import '../dashboard/dashboard.css';
import shopping  from '../dashboard/img/shopping-cart.png';
import smart from '../dashboard/img/smart-home.png';
import user from '../dashboard/img/users.png';
import graph1 from '../dashboard/img/Group 1.svg';
import graph2 from '../dashboard/img/Vector 2.svg';
function Dashboard() {

    return (
        <>

        
                <section className='dashboard'>
                   <div className="dashboard_left">
                    <p>Exclusive</p>
                    <h3>Main Menu</h3>
                    <div className='dashboard_menu'>
<div className='menu_select grey'><img src={smart} alt="" /><span>Dashboard</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Order Managment</span></div>
<div className='menu_select'><img src={user} alt="" /><span>Customers</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Coupon Code</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Categories</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Transaction</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Brand</span></div>
                    </div>
                    <h3>PRODUCTS</h3>
                    <div className='dashboard_menu'>
<div className='menu_select grey'><img src={smart} alt="" /><span>Add Product</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Product List</span></div>
</div>
<h3>ADMIN</h3>
                    <div className='dashboard_menu'>
<div className='menu_select grey'><img src={smart} alt="" /><span>Manage Admins</span></div>
<div className='menu_select'><img src={shopping} alt="" /><span>Admin Roles</span></div>
</div>
                   </div>
                   <div className="dashboard_right">   
                        <div className="dashboard_right_top">
                        
                        </div>  
                        <div className="dashboard_main">
                            <div className='div_block1'>
                        <div className='dashboard_block block1'>
                        <div className='block_left_inner'> <p>Total Sales & Costs</p>    <span className='days'>Last 7 days</span> <div className='block_left_inner_bottom'><span className="big_black">$350K</span><span className="low_blue">$235K</span></div>
                        <div className='block_left_inner_bottom_bottom'><span className="low_green">&uarr; 8.56k</span><span className="days">vs last 7 day</span></div>
                        
                        </div>
                        <div className='block_right_inner'> 
                            <div className='salescost'><span>Sales</span><span>Cost</span></div>
                            <img className='graph1' src={graph1} alt="" />
                            <div className='week'><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
                        </div>
                        </div>
                        <div className='dashboard_block block2'>      <div className='block_left_inner'> <p>Sessions</p>
                        <span>Last 7 days</span> <div className='block_left_inner_bottom'><span className="big_black">16.5k</span></div>
                        <div className='block_left_inner_bottom_bottom'><span className="low_green">&uarr; 8.56k</span><span className="days">vs last 7 day</span></div>
                        </div>
                        <div className='block_right_inner'> 
                     
                            <img className='graph2' src={graph2} alt="" />
                           
                        </div>

                        </div>


                        



                        </div>
                        <div className='div_block1'>
                        <div className='dashboard_block block3'>      <div className='block_left_inner'><p>Total Orders</p>    <span>Last 7 days</span><div className='block_left_inner_bottom'><span className="big_black">25.7k</span></div>
                        <div className='block_left_inner_bottom_bottom'><span className="low_green">&uarr; 6%</span><span className="days">vs last 7 day</span></div>
                        </div>
                        <div className='block_right_inner'> 
                     
                            <img className='graph3' src={graph2} alt="" />
                           
                     
                        
                        
                      








                        </div></div>
                        <div className='dashboard_block block3'>      <div className='block_left_inner'><p>Total Profit</p>    <span>Last 7 days</span><div className='block_left_inner_bottom'><span className="big_black">25.7k</span></div>
                        <div className='block_left_inner_bottom_bottom'><span className="low_green">&uarr; 6%</span><span className="days">vs last 7 day</span></div>
                        </div>
                        <div className='block_right_inner'> 
                     
                            <img className='graph3' src={graph2} alt="" />
                           
                     
                        
                        
                      








                        </div></div>
                        <div className='dashboard_block block3'>      <div className='block_left_inner'><p className='DA'>Discounted Amount</p>    <span>Last 7 days</span><div className='block_left_inner_bottom'><span className="big_black">12k</span></div>
                        <div className='block_left_inner_bottom_bottom'><span className="low_red">&uarr; 2%</span><span className="days">vs last 7 day</span></div>
                        </div>
                        <div className='block_right_inner'> 
                     
                            <img className='graph3' src={graph2} alt="" />
                           
                     
                        
                        
                      








                        </div></div>
                        </div>

                        <div className='div_block1'>
                        <div className='dashboard_block block4'></div>
                        <div className='dashboard_block block5'></div>
               
                        </div>

                        <div className='div_block1'>
                        <div className='dashboard_block block6'></div>
                        <div className='dashboard_block block7'></div>
               
                        </div>
                        <div className='div_block1'>
                        <div className='dashboard_block block8'></div>
                        <div className='dashboard_block block9'></div>
               
                        </div>
                        <div className='div_block1'>
                        <div className='dashboard_block block10'></div>
                        <div className='dashboard_block block11'></div>
               
                        </div>

                        </div>
                    </div>
                </section>
    
    
        </>
    )
}

export default  Dashboard;