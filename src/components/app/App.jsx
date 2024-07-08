import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';
import MainPage from "../../pages/main-page/main-page";
// import NotFoundPage from "../../pages/not-found-page/not-found-page";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
      <MainPage/>
      {/* <NotFoundPage/> */}
    </>
  );
}

export default App;
