import React, { useState} from "react";
import './styles/Header.scss';
import { Close, MenuBookOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
//import { createSvgIcon } from '@material-ui/icons';

const Header = () => {

    //const setActive = '/';

    const [isFocused, setIsFocused] = useState(false);
    const handleOnClick = (e) => {
        console.log(e);
    }

    const linksArr = [
        { to: "/" , text: "About Me"},
        { to: "/section" , text: "Portfolio"},
        { to: "/contact" , text: "Contact"},
        { to: "/resume" , text: "Resume"}
    ]


    return (
        <div className="header">
            <div className="header__logo">
               <h1> Ruchiz Portfolio </h1>
            </div>

            <nav>
                <ul>

                    {linksArr.map(({to, text}, index) => (

                    <li>
                    <Link onClick={handleOnClick} to={to}>{text}</Link>
                    </li>

                    ))}
                   
                 

                {/* <li>
                    <Link to = '/section'> Portfolio</Link>
                    </li> 

                <li>
                    <Link to = '/contact'> Contact</Link>
                    </li> 

                <li>
                    <Link to = '/resume'> Resume</Link>
                    </li>                 */}

                </ul>
            </nav>

          

        </div>
    )
}

export default Header