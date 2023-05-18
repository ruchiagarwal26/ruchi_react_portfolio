import React from "react";
import './styles/Section.scss'
import SectionItem from "./SectionItem";
import { SectionList } from "./SectionList";
import Proj0 from './assets/Ruchiz-quiz-website.jpg';
import Proj1 from './assets/Password-generator.jpg';
import Proj2 from './assets/Ruchiz-trip-to-future-planner.jpg';
import Proj3 from './assets/Ruchiz-Note-Taker.jpg';
import Proj4 from './assets/PWA-text-editor.jpg';
import { useNavigate } from "react-router-dom";

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

// const Section =() => {
//     const navigate = useNavigate();
//     return(
//         <div className="sections">
//             <h1> Projects </h1>
//             <div className="section__content" onClick={() => { navigate("/sectionId")
//             }}>
//                 <div className= "section__image" 
//                 style = 
//                 {{ backgroundImage: `url(${Proj0})`
//                 ,backgroundRepeat:"no-repeat"
//                 ,backgroundSize:"contain"
//                 }}>
//                 <div className="text-box">    
//                 <h1> Quiz website </h1>
//                 </div>
//                 </div>

            
//                 <div className= "section__image" 
//                 style = 
//                 {{ backgroundImage: `url(${Proj1})`
//                 ,backgroundRepeat:"no-repeat"
//                 ,backgroundSize:"contain"
//                 }}>
//                 <h1> Ruchiz Password Generator </h1>
//                 </div>
                
//                 <div className= "section__image" 
//                 style = 
//                 {{ backgroundImage: `url(${Proj3})`
//                 ,backgroundRepeat:"no-repeat"
//                 ,backgroundSize:"contain"
//                 }}>
//                 <h1> Ruchiz Note Taker </h1>
//                 </div>

//                 <div className= "section__image" 
//                 style = 
//                 {{ backgroundImage: `url(${Proj4})`
//                 ,backgroundRepeat:"no-repeat"
//                 ,backgroundSize:"contain"
//                 }}>
//                 <h1> Ruchiz PWA text editor </h1>
//                 </div>

//             </div>

//         </div>
//     )
// }


export default Section;
