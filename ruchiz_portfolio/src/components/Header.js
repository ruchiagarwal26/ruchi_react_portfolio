import React, { useState} from "react";
import './styles/Header.scss';

import { Close, MenuBookOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
//import { createSvgIcon } from '@material-ui/icons';

const Header = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className="header">
            <div className="header__logo">
               <h1> Ruchiz Portfolio </h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <Close className='close' onclick={showMenu} />

                    </div>  
                <li>
                    <Link to = '/'> About Me</Link>
                    </li> 

                <li>
                    <Link to = '/section'> Portfolio</Link>
                    </li> 

                <li>
                    <Link to = '/contact'> Contact</Link>
                    </li> 

                <li>
                    <Link to = '/resume'> Resume</Link>
                    </li>                

                </ul>
            </nav>

            <div className="changer">
                {/* to add book icon */}
                <MenuBookOutlined className="menu" onclick={showMenu} />
            </div>

        </div>
    )
}

export default Header