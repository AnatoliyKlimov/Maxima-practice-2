import '../scroll-btns/scroll-btns.css';


function ScrollBtns(props) {

    return (
        <>
            <div className='scroll-btns-block'>
                <button className="scroll-btn scroll-btn-back" onClick={() => props.left_btn(-300)}></button>
                <button className="scroll-btn scroll-btn-forward" onClick={() => props.right_btn(300)}></button>
            </div>
        </>
    )


}

export default ScrollBtns;