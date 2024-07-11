import '../sale-timer-block/sale-timer-block.css';
import { useState, useEffect } from 'react';


function SaleTimerBlock(props) {
    let timerId = null;
    let days = 0, hours = 0, minutes = 0, seconds = 0;
    let finalDate = new Date(2024, 6, 31, 14, 15, 45);

    function getSaleTime() {
        let currentDate = new Date();
        let diff = finalDate - currentDate;
        const daysView = document.querySelector('.timer-days');
        const hoursView = document.querySelector('.timer-hours');
        const minutesView = document.querySelector('.timer-minutes');
        const secondsView = document.querySelector('.timer-seconds');

        if (diff <= 0) {
            clearInterval(timerId);
        }

        if (diff > 0) {
            days = Math.floor(diff / 1000 / 60 / 60 / 24);

        }
        else {
            days = 0;
        }
        if (diff > 0) {
            hours = Math.floor(diff / 1000 / 60 / 60) % 24;
        }
        else {
            hours = 0;
        }
        if (diff > 0) {
            minutes = Math.floor(diff / 1000 / 60) % 60;

        }
        else {
            minutes = 0;
        }
        if (diff > 0) {
            seconds = Math.floor(diff / 1000) % 60;
        }
        else {
            seconds = 0;

        }
        if (days.toString().length < 2) {
            days = "0" + days;
        }

        if (hours.toString().length < 2) {
            hours = "0" + hours;
        }

        if (minutes.toString().length < 2) {
            minutes = "0" + minutes;
        }

        if (seconds.toString().length < 2) {
            seconds = "0" + seconds;
        }

        if (daysView != null) {
            daysView.textContent = days;
        }
        if (hoursView != null) {
            hoursView.textContent = hours;
        }
        if (minutesView != null) {
            minutesView.textContent = minutes;
        }
        if (secondsView != null) {
            secondsView.textContent = seconds;
        }
    }

    getSaleTime();
    timerId = setInterval(getSaleTime, 1000);
    return (
        <>
            <div className='sale-timer-block'>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Days</p>
                    <p className="timer-value-block-v timer-days"></p>
                </div>
                <span className='timer-splitter'>:</span>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Hours</p>
                    <p className="timer-value-block-v timer-hours"></p>
                </div>
                <span className='timer-splitter'>:</span>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Minutes</p>
                    <p className="timer-value-block-v timer-minutes"></p>
                </div>
                <span className='timer-splitter'>:</span>
                <div className="timer-value-block">
                    <p className="timer-value-block-d">Seconds</p>
                    <p className="timer-value-block-v timer-seconds"></p>
                </div>
            </div>
        </>

    )

}

export default SaleTimerBlock;