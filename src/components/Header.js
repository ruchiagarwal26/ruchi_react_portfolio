import React, { useEffect, useRef } from "react";
import './styles/Header.scss';
import { Link } from 'react-router-dom';
//import { createSvgIcon } from '@material-ui/icons';

const Header = () => {
const ulRef=useRef(null);
// const liRef=useRef(null);

// useEffect(() => {
// console.log(window.location.href)
// console.log(liRef.current)
// }, [])


    const handleOnClick = (e) => {
        ulRef.current.childNodes.forEach((li) => (
            li.classList.contains("active") && li.classList.remove("active")
        ))

        e.target.parentNode.classList.add("active")
    }



    const linksArr = [
        { to: "/" , text: "About Me"},
        { to: "/portfolio" , text: "Portfolio"},
        { to: "/contact" , text: "Contact"},
        { to: "/resume" , text: "Resume"}
    ];

    
    return (
        <div className="header">
            <div className="header__logo">
               <h1> Ruchiz Portfolio </h1>
            </div>

            <nav>
                <ul ref={ulRef}>

                    {linksArr.map(({to, text}, index) => (

                    <li>
                    <Link onClick={handleOnClick} to={to}>{text}</Link>
                    </li>

                    ))}


                </ul>
             </nav>
        </div>
     )
 }

export default Header