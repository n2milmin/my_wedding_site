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
                        viewBox="18 12 220 220"
                        x="0px"
                        y="0px">
                        <path d="M39.1,-65.9C51,-60.8,61.1,-51,67.9,-39.2C74.6,-27.4,77.9,-13.7,75.4,-1.4C72.9,10.9,64.7,21.7,57.2,32.2C49.7,42.7,43,52.7,33.6,58.4C24.2,64.1,12.1,65.4,-1.7,68.4C-15.5,71.4,-31.1,76,-44,72.4C-57,68.8,-67.4,56.9,-73.1,43.4C-78.9,30,-79.9,15,-79.8,0C-79.8,-15,-78.8,-29.9,-73.2,-43.7C-67.7,-57.5,-57.7,-70.1,-44.8,-74.6C-31.8,-79.1,-15.9,-75.5,-1.2,-73.5C13.6,-71.5,27.2,-71.1,39.1,-65.9Z" transform="translate(100 100)" />
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
                        viewBox="28 20 200 200"
                        x="0px"
                        y="0px">
                        <path d="M32.1,-55.6C44,-48.7,57.8,-45,65.4,-36.3C73,-27.5,74.4,-13.8,67.4,-4.1C60.3,5.6,44.8,11.3,38.7,22.5C32.5,33.8,35.7,50.6,30.8,61.7C25.9,72.7,13,78.1,1.6,75.3C-9.7,72.4,-19.4,61.5,-30.9,54.2C-42.4,46.9,-55.7,43.4,-61.3,35C-66.9,26.6,-64.8,13.3,-65.3,-0.3C-65.9,-13.9,-69.2,-27.9,-64.6,-38C-60,-48.1,-47.5,-54.4,-35.4,-61.2C-23.4,-68,-11.7,-75.3,-0.8,-73.9C10.1,-72.5,20.2,-62.5,32.1,-55.6Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="right">
                <div className='content'>
                    <h2>Directions</h2>
                    <p>Cranberry Creek Gardens</p>
                    <p><Link onClick={ handleMaps() }>56 Lynedoch Road, Lynedoch (Delhi) ON, N4B 2W4</Link></p>
                    <p>Note: this is an outdoor venue and you will be walking on <strong>GRASS</strong></p>
                    <br/>
                    <p>Best Western Little River Inn</p>
                    <p><Link onClick={ handleMaps() }>203 Queens Way West, Simcoe, ON, N3Y 2M9</Link></p>
                    <p>15 minute drive from the venue</p>
                    <p>Please be mindful of noise levels when returning from the wedding</p>
                </div>

                <div className="image_background_container">
                    <svg
                        className="image_background"
                        viewBox="22 20 190 190"
                        x="0px"
                        y="0px">
  <path d="M45,-67C59.8,-60.6,74.3,-50.5,81.1,-36.7C87.8,-22.9,86.9,-5.3,82.6,10.6C78.3,26.4,70.5,40.4,60.1,51.8C49.7,63.2,36.7,72,21.8,78.3C6.8,84.6,-10.1,88.3,-25.1,84.4C-40.2,80.6,-53.3,69,-61.8,55.6C-70.3,42.1,-74.3,26.7,-76,11.2C-77.8,-4.2,-77.4,-19.7,-72,-33.4C-66.6,-47.1,-56.1,-59.1,-43.3,-66.4C-30.5,-73.8,-15.2,-76.4,-0.1,-76.3C15.1,-76.2,30.2,-73.4,45,-67Z" transform="translate(100 100)" />
  </svg>
                </div>
            </div>
        </div>
    )
}

export default Details