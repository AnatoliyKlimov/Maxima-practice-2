import '../view-button/view-button.css';


function ViewButton(props) {

    return (
        <>
            <button className='view-button'>{props.name}</button>
        </>
    )
}

export default ViewButton;