import '../title-section/title-section.css';


function TitleSection(props) {

    return (
        <>
            <div className='title-section'>
                <div className="title-section-main-row">
                    <div className="title-section-main-rect"></div>
                    <h2 className='title-section-main-descr'>{props.main_title}</h2>
                </div>
                <div className="title-section-secondary-row">
                    <div className="title-section-secondary-sale-block">
                        <h3 className='title-section-secondary-descr'>{props.secondary_title}</h3>
                        {props.sale_timer_block}
                    </div>
                    {props.scrooll_btns}
                </div>
            </div>
        </>
    )


}

export default TitleSection;