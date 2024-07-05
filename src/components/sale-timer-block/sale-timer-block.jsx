import '../sale-timer-block/sale-timer-block.css';





function SaleTimerBlock() {
    return (
        <>
            <div className='sale-timer-block'>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Days</p>
                    <p className="timer-value-block-v">03</p>
                </div>
                <span className='timer-splitter'>:</span>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Hours</p>
                    <p className="timer-value-block-v">23</p>
                </div>
                <span className='timer-splitter'>:</span>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Minutes</p>
                    <p className="timer-value-block-v">19</p>
                </div>
                <span className='timer-splitter'>:</span>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Seconds</p>
                    <p className="timer-value-block-v">56</p>
                </div>
            </div>
        </>
    )


}

export default SaleTimerBlock;