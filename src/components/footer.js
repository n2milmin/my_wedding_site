import './footer.css';
import { Link } from "react-router-dom";

const footer = () => {
    return(
        <div className="footer" >
            <Link className='me' to={{ pathname: "https://github.com/n2milmin"}} target="_blank">
                &copy;Nicole Milmine
            </Link>
        </div>
    )
}

export default footer; 