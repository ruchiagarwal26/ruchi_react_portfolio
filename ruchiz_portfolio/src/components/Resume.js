import React from "react";
import resume from "./assets/Resume_Ruchi.pdf"
import "./styles/Resume.scss";
import pdfImage from "./assets/pdf.png";


const Resume =() => {
    const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'];

    return (
        <div className= "Resume_section">
            <h2>Ruchi's Resume</h2>
            <h3>I am Proficient at </h3>
            <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <div>
        <a href= {resume} target="_blank" rel="noreferrer">
            <img src={pdfImage} alt=""></img>
            <h3 style={{"padding-left": "25rem"}}>Please click on the link to Download my resume</h3>
        </a>
        </div>
    </div>
  );
}

export default Resume;    