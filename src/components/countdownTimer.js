import React, { useState, useEffect } from "react";
import "./countdownTimer.css";

const CountdownTimer = () => {

    const eventDate = new Date('October 3, 2026 16:45:00')
    const [timeRemaining, setTimeRemaining] = useState(0);


    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime()
            const eventTime = new Date(eventDate).getTime()
            let remainingTime = eventTime - currentTime;

            if(remainingTime <= 0) {
                remainingTime = 0
                clearInterval(countdownInterval)
            }

            setTimeRemaining(remainingTime)
        }, 1000)
        
        return () => clearInterval(countdownInterval)
    }, [eventDate, timeRemaining])
    
    const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
        <div className="countdown-display">
            <div className="countdown-value">
            {days.toString().padStart(2, "0")} <span>days</span>
            </div>
            <div className="countdown-value">
            {hours.toString().padStart(2, "0")} <span>hours</span>
            </div>
            <div className="countdown-value">
            {minutes.toString().padStart(2, "0")} <span>minutes</span>
            </div>
            <div className="countdown-value">
            {seconds.toString().padStart(2, "0")} <span>seconds</span>
            </div>
        </div>
        );
    };


    return (
        <div className="countdown_container">
            { formatTime(timeRemaining) }
        </div>
    )
}

export default CountdownTimer; 