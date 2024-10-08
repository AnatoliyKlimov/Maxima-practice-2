import Login from '../login/login';
import Checkout from '../checkout/checkout';
import Cart from '../cart/cart';
import MainPage from "../../pages/main-page/main-page";
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/layout';
import { AccountPage, ContactPage, ProductDetails } from '../../pages/'
// import NotFoundPage from "../../pages/not-found-page/not-found-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import AboutPage from "../../pages/about-page/about-page";
import WishlistPage from "../../pages/wishlist-page/wishlist-page";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path="/account" element={<AccountPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/details" element={<ProductDetails />}/>
        </Route>
      </Routes>
      <WishlistPage />
      {/* <MainPage/> */}
      <Header />
     {/*  <Checkout />*/}
    <Login /> 
      <Footer />
      {/* <MainPage/> */}
      {/* <NotFoundPage/> */}
      {/* <AboutPage /> */}
    </>
  );
}

export default App;
