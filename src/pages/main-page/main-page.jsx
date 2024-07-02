import '../main-page/main-page.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import MenuListCategoriesSection from './menu-list-categories-section/menu-list-categories-section';

function MainPage() {

    return (
        <>
            <Header />
            <MenuListCategoriesSection />
            <Footer />
        </>
    )


}

export default MainPage;