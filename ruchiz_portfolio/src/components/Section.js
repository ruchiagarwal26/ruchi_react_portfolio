import React from "react";
import './styles/Section.scss'
import ra2 from "./assets/avatar.png";


const Section =() => {
    return(
        <div className="sections">

            <div className="sections__container">
                <div className="section__img">
                    <img src={ra2} alt = ""/>
                </div>

                <div className="section_content">
                    <h1>Ruchi Agarwal</h1>
                    <p>Experienced developer</p>
                    <p> I am doing .....</p>
                    <p> I am doing .....</p>
                    <p> I am doing .....</p>
                    <p> I am doing .....</p>
                </div>
            </div>

        </div>
    )
}


export default Section;
