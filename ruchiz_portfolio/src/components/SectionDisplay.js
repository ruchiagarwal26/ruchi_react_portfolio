import React from "react";
import { useParams } from "react-router-dom";
import {SectionList} from "../components/SectionList";
import GitHubIcon from "@material-ui/icons/GitHub";

function SectionDisplay() {
    const { id } = useParams();
    const section = SectionList[id];
    return (
        <div className="section">
            <h1> {section.name} </h1>
            <img src={section.image} alt = ""/>
            <p>Skills: {section.skills}</p>
            <GitHubIcon />
        </div>
    )
    
}


export default SectionDisplay;