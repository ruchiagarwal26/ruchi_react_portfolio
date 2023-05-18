import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';

function SectionItem({ image, name, id, gitlink }) {
  const navigate = useNavigate();
  return (
    <div
      className="sectionItem"
      onClick={() => {
        navigate("/sectionId/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:"contain" }} className="bgImage" />
      <h1> {name} </h1>
      <a href={gitlink}>
             <GitHubIcon className="icon"/>
            </a>
    </div>
  );
}

export default SectionItem;
