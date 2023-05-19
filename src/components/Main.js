import React from "react";
import './styles/Main.scss'
//import { Twitter, LinkedIn, Facebook } from "@material-ui/icons";
import ra from './assets/avatar-0.png'

const Main =() => {
    return(
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <p> Hello Everyone</p>
                        <h1>
                            I am an aspiring full stack developer
                        </h1>
                        <p> This is my  portfolio</p>
                        <p> I am currently pursuing Full Stack Development Boot Camp from Rutgers</p>
                        <p> and getting to learn front end functionalities with
                            learning HTML, CSS, JS, REACT, Express, SQL and NoSql
                        </p>
                        <p> I am a Data Engineer and worked on 
                            Dataware housing Solutions, Architecture and  end to end processes</p>
                    </div>
                </div>
                <div className="main__img">
                    <img src={ra} alt=" "/>
                </div>
            </div>

        </div>
    )
}

export default Main;