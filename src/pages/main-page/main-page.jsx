import '../main-page/main-page.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import MenuListCategoriesSection from './menu-list-categories-section/menu-list-categories-section';
import TodaysSection from './todays-section/todays-section';
import CategoriesSection from './categories-section/categories-section';
import ThisMonthSection from './this-month-section/this-month-section';

function MainPage() {

    return (
        <>
            <Header />
            <MenuListCategoriesSection />
            <TodaysSection />
            <CategoriesSection />
            <ThisMonthSection />
            <Footer />
        </>
    )


}

export default MainPage;