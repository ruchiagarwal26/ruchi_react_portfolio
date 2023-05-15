import React from "react";
import './styles/Contact.scss';
import { ArrowBack } from "@material-ui/icons";
import { Link } from 'react-router-dom';



const Contact =() => {
    return(
        <div className="contat">
            <Link to = "/">
                <ArrowBack className="arrow"/>
            </Link>
            <div className="inputs">
                <h1> contact Me </h1>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Meassage" className="message"/>
                <button>Send</button>
            </div>          
       </div>

                
    )
}


export default Contact;
