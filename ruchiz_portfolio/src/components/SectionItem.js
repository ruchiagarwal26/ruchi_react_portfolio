import React from "react";
import { useNavigate } from "react-router-dom";

function SectionItem({ image, name, id }) {
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
    </div>
  );
}

export default SectionItem;
