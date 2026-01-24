import './Details.css';
import { Link } from "react-router-dom";

const Details = () => {
    const website = "https://www.guestreservations.com/best-western-little-river-inn-simcoe/booking?utm_source=google&utm_medium=cpc&utm_campaign=973005509&gad_source=1&gad_campaignid=973005509&gbraid=0AAAAADiMQMZFf_n_7QfVyYB6wKMbkqWBK&gclid=CjwKCAjwx8nCBhAwEiwA_z__0ydXhOjtLTrHOhkT0SGKkv2oSMMXXzb9BwscVofgRr1-fJ3Sao1P3RoCfTsQAvD_BwE";
    const venue = "https://maps.app.goo.gl/jwPjpzKKsGUPkCMz6";
    const hotel = "https://maps.app.goo.gl/YUXGZZ3sojvkomZ39";

    return(
        <div className="details_container">
            <div className="left">
                <div className='content'>
                    <h2>Itinerary</h2>
                    <div className='itenerary'>
                        <div className='action'>
                            <p>HOTEL CHECK-IN</p>
                            <p>SHUTTLE</p>
                            <p>CEREMONY</p>
                            <p>COCKTAIL HOUR</p>
                            <p>DINNER</p>
                            <p>LET'S PARTY</p>
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
            </div>

            <div className="middle">
                <div className='content'>
                    <h2>Accommodations</h2>
                    <p>Best Western Little River Inn</p> 
                    <p>
                        <Link to={website} target='_blank' style={{color: 'purple'}}>Book Online</Link>, &nbsp;
                        Call: 519-426-6103
                    </p>
                    <p>Request "The Milmine & Parkins Wedding"</p> 
                    <p>Friday and Saturday nights available</p>
                    <p>Check-in: 3:00 pm</p>
                    <p>Check-out: 11:00 am</p>
                </div>
            </div>

            <div className="right">
                <div className='content'>
                    <h2>Directions</h2>
                    <p>Cranberry Creek Gardens</p>
                    <p><Link to={venue} target='_blank' style={{color: 'purple'}}>56 Lynedoch Road, Lynedoch ON, N4B 2W4</Link></p>
                    <p>Note: You will be walking on <strong>GRASS</strong></p>
                    <br/>
                    <p>Best Western Little River Inn</p>
                    <p><Link to={hotel} target='_blank' style={{color: 'purple'}}>203 Queens Way West, Simcoe, ON, N3Y 2M9</Link></p>
                    <p>15 minute drive from the venue</p>
                </div>
            </div>
        </div>
    )
}

export default Details