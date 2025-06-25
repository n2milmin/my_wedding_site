import './Details.css';
import React from "react";
import { Link } from "react-router-dom";

const Details = () => {

    const handleHotel = () => {
        // Open new page with Hotel home page or personal booking link? 
        // const website = "https://www.guestreservations.com/best-western-little-river-inn-simcoe/booking?utm_source=google&utm_medium=cpc&utm_campaign=973005509&gad_source=1&gad_campaignid=973005509&gbraid=0AAAAADiMQMZFf_n_7QfVyYB6wKMbkqWBK&gclid=CjwKCAjwx8nCBhAwEiwA_z__0ydXhOjtLTrHOhkT0SGKkv2oSMMXXzb9BwscVofgRr1-fJ3Sao1P3RoCfTsQAvD_BwE";
    }

    const handlePhone = () => {
        // if on mobile, open call option 
        // const phone = "(833) 311-9043";
    }

    const handleMaps = () => {
        // handle sending to google maps 
        // const hotel_loc = "203 Queens Way West, Simcoe, ON, N3Y 2M9, Canada";
    }

    return(
        <div className="details_container">
            <div className="left">
                <div className='content'>
                    <h2>Itenerary</h2>
                    <div className='itenerary'>
                        <div className='action'>
                            <p>HOTEL CHECK-IN</p>
                            <p>SHUTTLE</p>
                            <p>CEREMONY</p>
                            <p>COCKTAIL HOUR</p>
                            <p>DINNER</p>
                            <p>LETS PARTY</p>
                            <p>SNACKS</p>
                            <p>SHUTTLE</p>
                        </div>

                        <div className='time'>
                            <p>3:00 PM</p>
                            <p>4:00 PM</p>
                            <p>4:45 PM</p>
                            <p>5:15 PM</p>
                            <p>6:30 PM</p>
                            <p>8:00 PM</p>
                            <p>10:00 PM</p>
                            <p>12:00 AM</p>
                        </div>
                    </div>
                </div>

                <div className="image_background_container">
                    <svg
                        className="image_background"
                        viewBox="16 12 200 200"
                        x="0px"
                        y="0px">
                        <path d="M51.8,-63.2C64.2,-51.3,69.4,-32.2,74,-12.2C78.6,7.8,82.4,28.8,75.2,45.3C67.9,61.7,49.5,73.5,30.3,78.5C11,83.5,-9,81.6,-25.9,74.2C-42.9,66.7,-56.7,53.7,-67.6,37.7C-78.4,21.6,-86.2,2.5,-83.1,-14.6C-80.1,-31.7,-66,-46.9,-50.4,-58.2C-34.7,-69.6,-17.3,-77.1,1.2,-78.5C19.7,-79.9,39.3,-75.1,51.8,-63.2Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="middle">
                <div className='content'>
                    <h2>Accomidations</h2>
                    <p>Best Western Litte River Inn</p> 
                    <p>
                        <Link onClick={ handleHotel() }>Hotel link</Link>, &nbsp;
                        <Link onClick={ handlePhone() }>Phone number</Link>
                    </p>
                    <p>Request "The Milmine & Parkins Wedding"</p> 
                    <p>Friday and Saturday nights available</p>
                    <p>Check-in: 3:00 pm</p>
                    <p>Check-out: </p>
                </div>

                <div className="image_background_container">
                    <svg
                        className="image_background"
                        viewBox="15 10 200 200"
                        x="0px"
                        y="0px">
                        <path d="M41.4,-72.4C54.8,-63.9,67.8,-55.3,74.9,-43.2C81.9,-31.1,83.1,-15.5,83.5,0.2C83.9,16,83.6,32.1,76.5,44C69.4,56,55.4,63.9,41.5,69.5C27.6,75.1,13.8,78.4,-0.2,78.8C-14.2,79.2,-28.4,76.5,-40.9,70.1C-53.4,63.7,-64,53.4,-70,41.1C-76,28.8,-77.3,14.4,-77.7,-0.2C-78,-14.8,-77.5,-29.6,-71.3,-41.5C-65.1,-53.4,-53.1,-62.4,-40.3,-71.3C-27.5,-80.3,-13.7,-89.2,0.1,-89.4C13.9,-89.6,27.9,-81,41.4,-72.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="right">
                <div className='content'>
                    <h2>Directions</h2>
                    <p>Cranberry Creek Gardens</p>
                    <p><Link onClick={ handleMaps() }>56 Lynedoch Road, Lynedoch ON, N4B 2W4</Link></p>
                    <p>Note: this is an outdoor venue and you will be walking on <strong>GRASS</strong></p>
                    <br/>
                    <p>Best Western Little River Inn</p>
                    <p><Link onClick={ handleMaps() }>203 Queens Way West, Simcoe, ON, N3Y 2M9</Link></p>
                    <p>15 minute drive from the venue</p>
                    {/* <p>Please be mindful of noise levels when returning from the wedding</p> */}
                </div>

                <div className="image_background_container">
                    <svg
                        className="image_background"
                        viewBox="20 15 160 160"
                        x="0px"
                        y="0px">
                        <path d="M55.5,-56.3C70,-41,78.5,-20.5,78.8,0.3C79,21,71.1,42.1,56.6,55.4C42.1,68.7,21,74.3,0.6,73.7C-19.9,73.1,-39.8,66.4,-53.8,53.1C-67.8,39.8,-76,19.9,-77.7,-1.6C-79.3,-23.1,-74.3,-46.2,-60.3,-61.6C-46.2,-77,-23.1,-84.7,-1.3,-83.3C20.5,-82,41,-71.7,55.5,-56.3Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Details