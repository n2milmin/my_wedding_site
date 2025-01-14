import './navBar.css';
import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from 'react';


const navBar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenuMobile = () => {
        if (window.innerWidth <= 1150)
            setShowMenu(false)
    }

    const closeMobileView = () => {
        if(isMobile)
            setMenuOpen(false)
    }

    const renderNavLinks = () => {
        const listClassName = isMobile ? "nav_list" : "nav_list_web"
    
        return(
            <ul className={ listClassName }>
                    <li className='nav_list_item'>
                        <NavLink to="/" className="nav_link" onClick={ closeMenuMobile }>Home</NavLink>
                    </li>
                    <li className='nav_list_item'>
                        <NavLink to="/" className="nav_link" onClick={ closeMenuMobile }>RSVP</NavLink>
                    </li>
                    <li className='nav_list_item'>
                        <NavLink to="/" className="nav_link" onClick={ closeMenuMobile }>Itinerary</NavLink>
                    </li>
                    <li className='nav_list_item'>
                        <NavLink to="/" className="nav_link" onClick={ closeMenuMobile }>Registry</NavLink>
                    </li>     
                    <li className='nav_list_item'>
                        <NavLink to="/" className="nav_link" onClick={ closeMenuMobile }>Acommidations & Directions</NavLink>
                    </li>
                    <li className='nav_list_item'>
                        <NavLink to="/" className="nav_link" onClick={ closeMenuMobile }>Gallery</NavLink>
                    </li>
                </ul>
        )
    }


    return (
        <header className='header'>
            <nav className={ 'nav_container &&{showMenu ? "showMenu" : "" }'}>
                <NavLink to="/" className="nav_logo">Nicole & Tyler</NavLink>

                {isMobile && (
                    <div className="nav_toggle" id="nav-toggle" onClick={ toggleMenu }>
                        <IoMenu />
                    </div>
                )}

                {isMobile ? (
                    <div className={ 'nav_menu ${ menuOpen ? "show-menu" : "" }'} id='nav-menu'>
                        {renderNavLinks()}
                        <div className="nav_close" id="nav-close" onClick={ toggleMenu }>
                            <IoClose />
                        </div>
                    </div>
                ) : (
                    renderNavLinks()
                )}
            </nav>
        </header>
    )
}

export default navBar;