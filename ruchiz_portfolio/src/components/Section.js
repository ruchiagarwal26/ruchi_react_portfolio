import React from "react";
import './styles/Section.scss'
import SectionItem from "./SectionItem";
import { SectionList } from "./SectionList";


const Section =() => {
    return (
        <div className="sections">
         <h1> </h1>
          <div className="sectionList">
            {SectionList.map((section, idx) => {
              return (
                <SectionItem id={idx} name={section.name} image={section.image} />
              );
            })}
          </div>
        </div>
      );
    }




export default Section;
