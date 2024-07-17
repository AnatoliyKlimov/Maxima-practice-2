import '../statistics-block/statistics-block.css';


function StatisticsBlock(props) {

    return (
        <>
            <div className='statistics-block'
               onMouseOver={e => (e.currentTarget.children.item(0).src = props.imgA)}
               onMouseOut={e => (e.currentTarget.children.item(0).src = props.img)}>
                <img src={props.img} alt={props.descr} className="statistics-block-img"/>
                <p className="statistics-block-main-numbers">{props.descr}</p>
                <p className="statistics-block-main-descr">{props.numbers}</p>
            </div>
        </>
    )


}

export default StatisticsBlock;