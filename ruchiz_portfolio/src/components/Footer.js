import React from "react";
import { Twitter, LinkedIn, Facebook } from "@material-ui/icons";
import  "./styles/Footer.scss"

const Footer =() => {
    return(
        <div className="icons">
            <Twitter className="icon"/>
            <LinkedIn className="icon"/>
            <Facebook className="icon"/>
        </div>
    )
}

export default Footer;