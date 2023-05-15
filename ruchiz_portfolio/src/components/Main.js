import React from "react";
import './styles/Main.scss'
import { Twitter, LinkedIn, Facebook } from "@material-ui/icons";
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
                        <div className="icons">
                            <Twitter className="icon"/>
                            <LinkedIn className="icon"/>
                            <Facebook className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>It's Me</button>
                        </div>
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