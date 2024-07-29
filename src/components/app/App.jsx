import Header from '../header/header';
import Footer from '../footer/footer';
import Dashboard from '../../pages/dashboard/dashboard';
import Login from '../login/login';
import Checkout from '../checkout/checkout';
import Cart from '../cart/cart';
import MainPage from "../../pages/main-page/main-page";
// import NotFoundPage from "../../pages/not-found-page/not-found-page";

function App() {
  return (
    <>
      <Header />
  { <Dashboard />}
     {/* <Login /> */}
      <Footer />
{/* <MainPage/> */}
{/* <NotFoundPage/> */}
    </>
  );
}

export default App;
