import '../category-block/category-block.css';

function CategoryBlock(props) {

    return (
        <>
            <div className="category-block">
                <div className="category-block__img">
                    <img src={props.img_category} alt={props.category} />
                </div>
                <p className='category-block-name'>{props.category}</p>
            </div>
        </>
    )
}

export default CategoryBlock;