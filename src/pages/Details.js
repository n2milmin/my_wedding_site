import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
    

    const handleHotel = () => {
        // Open new page with Hotel home page or personal booking link? 
    }

    const handlePhone = () => {
        // if on mobile, open call option 
    }

    const handleMaps = () => {

    }

    return(
        <div className="">
            <div className="left">
                <h3>Itenerary</h3>
                <div>
                    <p>Hotel Checkin: </p>
                    <p>Shuttle to Ceremony: </p>
                    <p>Ceremony: 4:45pm</p>
                    <p>Cocktail Hour: </p>
                    <p>Dinner: 6pm</p>
                    <p>Reception: 8pm</p>
                    <p>Late Night Snack: 11pm</p>
                    <p>Shuttle Leaves: 12am *HARD DEADLINE*</p>
                </div>
            </div>

            <div className="middle">
                <h3>Accomidations</h3>
                <p>Best Western Litte River Inn</p> 
                <Link onClick={ handleHotel() }>hotel link</Link>
                <Link onClick={ handlePhone() }>Phone number</Link>
                <p>Hotel block booked for Nicole & Tylers wedding</p>
                <p>Check-in: 3pm</p>
            </div>

            <div className="right">
                <h3>Directions</h3>
                <p>Cranberry Creek Gardens</p>
                <Link onClick={ handleMaps() }>56 Lynedoch Road, Lynedoch (Delhi) ON N4B2W4</Link>
                <p>Please note that this is an outdoor venue and you will be walking on GRASS</p>
            </div>
        </div>
    )
}

export default Details