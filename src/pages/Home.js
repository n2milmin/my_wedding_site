import './Home.css';
import CountdownTimer from '../components/countdownTimer.js';
import our_picture from '../ty_me_wedding_pic.jpg';

const Home = () => {
    const form_url = "https://docs.google.com/forms/d/e/1FAIpQLSd2VEwaf-mNPmU3YAq2UADS2bH3nbfYQieRk-gYTDyjKSB43w/viewform"
    const album_url = "https://photos.app.goo.gl/iikhrYQdqMqMwTvg9"

    const handleForm = () => {
        var win = window.open(form_url, '_blank');
        win.focus();
    };
    const handleAlbum = () => {
        var win = window.open(album_url, '_blank');
        win.focus();
    };

    return (
        <div className='home_container'>
            <div className='home_img_container'>
                <img className='our_img' src={our_picture} alt='Nicole & Tyler' />

                <div className="image_background_container">
                    <svg
                        className="image_background"
                        viewBox="0 0 160 160"
                        x="0px"
                        y="0px">
                        <path d="M151.7,132.5c-3.4,6-7.9,11.7-13.3,16.5c-29.2,26.1-54.1-2.3-88.2-3S0,109.5,0,91.6s14.8-31.3,25.3-45.3S33.4,11,51.8,3 c15.3-6.6,33.6-0.4,51.6,0.7c11.2,0.7,28.8-3.8,38.2,0.4s11.8,15.4,9.2,22.8c-1.9,5.4-5.5,11.6-12.8,16.5 c-9.3,10.1-4.7,22.9,3.7,33.4c7.8,9.7,17.7,11.7,18.3,23.5C160.4,110.8,157.6,122.2,151.7,132.5L151.7,132.5z"></path>
                    </svg>
                </div>
            </div>

            <div className='home_content_container'>
                <h2 className='home_content_title'>Nicole & Tyler</h2>
                <p className='home_content_text'>
                    We're so excited to celebrate our wedding day with those we love (YOU). 
                    You will be required to walk on grass. It is an open bar, but there will be no shots or doubles (venue rules). 
                </p>
                <div className='countdown_container'>
                    < CountdownTimer />
                </div>

                <div>
                    <button className="btn" onClick={handleForm}>RSVP</button>
                    <button className='btn' onClick={handleAlbum}>Share Photos</button>
                </div>
            </div>
        </div>
    )
}


export default Home;