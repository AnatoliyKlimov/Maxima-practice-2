import '../categories-section/categories-section.css';
import TitleSection from '../../../components/title-section/title-section';
import ScrollBtns from '../../../components/scroll-btns/scroll-btns';
import data from '../../../components/app/data';
import CategoryBlock from '../../../components/category-block/category-block';

function CategoriesSection() {
    const main_title = "Categories";
    const secondary_title = "Browse By Category";

    let category = data.map((elem, index) => {
        if(elem.img_category!='' && index<6){
          return <CategoryBlock
            key={index}
            category = {elem.category}
            img_category = {elem.img_category}
        />  
        }
        
    });

    return (
        <>
            <section>
                <div className="container">
                    <div className="categories-section">
                        <TitleSection
                            main_title={main_title}
                            secondary_title={secondary_title}
                            scrooll_btns={<ScrollBtns />}
                        />
                        <div className="category">
                            {category}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CategoriesSection;