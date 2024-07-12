import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';
import { Provider } from "react-redux";
import MainPage from "../../pages/main-page/main-page";
import { Route, Routes } from 'react-router-dom'
import AccountPage from '../../pages/my-account-page/my-account-page'
// import NotFoundPage from "../../pages/not-found-page/not-found-page";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/account' element={<AccountPage />} />
      </Routes>
      <Footer />
      {/* <NotFoundPage/> */}
    </>
  );
}

export default App;
