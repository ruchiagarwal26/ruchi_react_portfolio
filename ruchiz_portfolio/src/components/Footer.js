import React from "react";
import { Twitter, LinkedIn, Facebook } from "@material-ui/icons";
import  "./styles/Footer.scss"
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer =() => {
    return(
        <div className="icons">
            <a href="https://github.com/">
             <GitHubIcon className="icon"/>
            </a>
            <a href="https://twitter.com/i/flow/login">
            <Twitter className="icon"/>
            </a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
            <LinkedIn className="icon"/>
            </a>
            <a href="https://www.facebook.com/login/">
            <Facebook className="icon"/>
            </a>
        </div>
    )
}

export default Footer;