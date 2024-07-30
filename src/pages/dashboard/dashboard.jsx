import '../dashboard/dashboard.css';
import shopping  from '../dashboard/img/shopping-cart.png';
import smart from '../dashboard/img/smart-home.png';
import user from '../dashboard/img/users.png';
import graph1 from '../dashboard/img/Group 1.svg';
import graph2 from '../dashboard/img/Vector 2.svg';
import dots from '../dashboard/img//dots-vertical.png';
import graph4 from '../dashboard/img/graph4.png';
import bargraph from '../dashboard/img/bargraph.png';
import country from '../dashboard/img/us 1.png';
import line from '../dashboard/img/line.png';
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
                        <div className='dashboard_block block4'>
                            <div className='block4_top'><div><span>Report</span><p>Last 7 Days</p></div> <img src={dots} alt="dots" /></div>
                            <div className='block4_bottom'>
                                <div className='block4_bottom_menu'>
                                    <div className='info1 info1_border'><span className='numberinfo'>24k</span><p className='nameinfo'>Customer</p></div>
                                    <div className='info1'><span className='numberinfo'>3.5k</span><p className='nameinfo'>Total Products</p></div>
                                    <div className='info1'><span className='numberinfo'>2.5k</span><p className='nameinfo'>Stock Products</p></div>
                                    <div className='info1'><span className='numberinfo'>0.5</span><p className='nameinfo'>Out of Stock</p></div>
                                    <div className='info1'><span className='numberinfo'>250k</span><p className='nameinfo'>Reveneu</p></div>
                                </div>
                                <img src={graph4} alt="" />
                            </div>
                        </div>
                        <div className='dashboard_block block5'>
                            <div className='block5_top'><p>Users in last 30 minutes</p><span className='cost'>16.5K</span><span className='user_per'>User per minute</span> <img src={bargraph} alt="bar" /></div>
                            <div className='block5_bottom'>
                                <div className='block5_bottom_top'><span>Sales by Country</span><span>Sales</span></div>
                                <div className='block5_bottom_bottom'>
                                    <div className='country'><img className='spherecountry' src={country} alt="USA" />
                                    <div><span className='minicost'>30k</span><p className='country_name'>United States</p></div>
                                    <img src={line} alt="line" />
                                    <span className='procent'>&uarr;25.8%</span></div>
                                    <div className='country'><img className='spherecountry' src={country} alt="USA" />
                                    <div><span className='minicost'>30k</span><p className='country_name'>United States</p></div>
                                    <img src={line} alt="line" />
                                    <span className='procent'>&uarr;25.8%</span></div>
                                    <div className='country'><img className='spherecountry' src={country} alt="USA" />
                                    <div><span className='minicost'>30k</span><p className='country_name'>United States</p></div>
                                    <img src={line} alt="line" />
                                    <span className='procent'>&uarr;25.8%</span></div>
                                    <div className='country'><img className='spherecountry' src={country} alt="USA" />
                                    <div><span className='minicost'>30k</span><p className='country_name'>United States</p></div>
                                    <img src={line} alt="line" />
                                    <span className='procent'>&uarr;25.8%</span></div>
                                </div>
                            </div>
                        </div>
               
                        </div>

                        <div className='div_block1'>
                        <div className='dashboard_block block6'>
                        <div className='block6_top'><div><span>Top Selling Category</span><p>Total 10.4k Visitors</p></div> <img src={dots} alt="dots" /></div>
                        <div className='block6_bottom'>
                            <div className='sphere sphere_big'><span>Fashion</span><p>4.567</p><span>Per Day</span></div>
                        <div className='sphere sphere_middle'><span>Fashion</span><p>3.167</p><span>Per Day</span></div>
                        <div className='sphere sphere_low'><span>Fashion</span><p>1.845</p><span>Per Day</span></div></div>
                        </div>
                        <div className='dashboard_block block7'>
                        <div className='block7_top'><div><span>Top Selling Category</span></div> <p>View All</p></div>
                        <div className='block7_bottom'>
                        <table>

  <thead>
    <tr>
      <th className='menu_tabl first1'>ID</th>
      <th className='menu_tabl'>ISSUED DATE</th>
      <th className='menu_tabl'>TOTAL</th>
      <th className='menu_tabl'>ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className='first_table'>#5089</th>
      <td>31 March 2023</td>
      <td>1200$</td>
      <td className='last_table'>View Detail</td>
    </tr>
    <tr>
    <th className='first_table'>#5089</th>
      <td>31 March 2023</td>
      <td>1200$</td>
      <td className='last_table'>View Detail</td>
    </tr>
    <tr>
    <th className='first_table'>#5089</th>
      <td>31 March 2023</td>
      <td>1200$</td>
      <td className='last_table'>View Detail</td>
    </tr>
    <tr>
    <th className='first_table'>#5089</th>
      <td>31 March 2023</td>
      <td>1200$</td>
      <td className='last_table'>View Detail</td>
    </tr>
    <tr>
    <th className='first_table'>#5089</th>
      <td>31 March 2023</td>
      <td>1200$</td>
      <td className='last_table'>View Detail</td>
    </tr>
    <tr>
    <th className='first_table'>#5089</th>
      <td>31 March 2023</td>
      <td>1200$</td>
      <td className='last_table'>View Detail</td>
    </tr>
  </tbody>
</table>
                        </div>
                        </div>
                        </div>
                        <div className='div_block1'>
                        <div className='dashboard_block block7'>
                        <div className='block7_top'><div><span>Best Selling Products</span></div> <img src={dots} alt="dots" /></div>
                        <div className='block7_bottom'>
                        <table className='table2'>

  <thead>
    <tr>
      <th className='menu_tabl first1'>PRODUCT</th>
      <th className='menu_tabl'>TOTAL ORDER</th>
      <th className='menu_tabl'>STATUS</th>
      <th className='menu_tabl'>PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className='first_table_black'>#5089</th>
      <td>506</td>
      <td>1200$</td>
      <td className='last_table_black'>$999.29</td>
    </tr>
    <tr>
    <th className='first_table_black'>#5089</th>
    <td>506</td>
      <td>1200$</td>
      <td className='last_table_black'>$999.29</td>
    </tr>
    <tr>
    <th className='first_table_black'>#5089</th>
    <td>506</td>
      <td>1200$</td>
      <td className='last_table_black'>$999.29</td>
    </tr>
    <tr>
    <th className='first_table_black'>#5089</th>
    <td>506</td>
      <td>1200$</td>
      <td className='last_table_black'>$999.29</td>
    </tr>
    <tr>
    <th className='first_table_black'>#5089</th>
    <td>506</td>
      <td>1200$</td>
      <td className='last_table_black'>$999.29</td>
    </tr>
  </tbody>
</table>
                        </div>
                        </div>
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