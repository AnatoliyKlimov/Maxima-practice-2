import Login from '../login/login';
import MainPage from "../../pages/main-page/main-page";
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/layout';
import { AccountPage, ContactPage, ProductDetails } from '../../pages/'
// import NotFoundPage from "../../pages/not-found-page/not-found-page";

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
      {/* <NotFoundPage/> */}
    </>
  );
}

export default App;
