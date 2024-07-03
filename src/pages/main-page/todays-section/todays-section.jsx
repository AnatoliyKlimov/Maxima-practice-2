import '../todays-section/todays-section.css';
import TitleSection from '../../../components/title-section/title-section';
import SaleTimerBlock from '../../../components/sale-timer-block/sale-timer-block';
import ScrollBtns from '../../../components/scroll-btns/scroll-btns';


function TodaysSection() {
    const main_title = "Today’s";
    const secondary_title = "Flash Sales";

    return (
        <>
            <section>
                <div className="container">
                    <div className="todays-section">
                        <TitleSection
                            main_title={main_title}
                            secondary_title={secondary_title}
                            sale_timer_block={<SaleTimerBlock />}
                            scrooll_btns={<ScrollBtns />}
                        />
                    </div>

                </div>

            </section>
        </>
    )
}

export default TodaysSection;