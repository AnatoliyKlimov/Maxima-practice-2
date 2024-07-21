import Login from '../login/login';
import Checkout from '../checkout/checkout';
import CartPage from '../../pages/cart-page/cart-page';
import MainPage from "../../pages/main-page/main-page";
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/layout';
import { AccountPage, ContactPage, ProductDetails } from '../../pages/'
// import NotFoundPage from "../../pages/not-found-page/not-found-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import AboutPage from "../../pages/about-page/about-page";
import WishlistPage from "../../pages/wishlist-page/wishlist-page";
import { reducer } from '../../components/store/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

function App() {
  const store = configureStore({ reducer })
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
