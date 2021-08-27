import React from "react";
import skeleton from "../../../img/cardSkeleton.png";
import StyledSkeleton from "./styles";

function Loading({ countriesPerPage }) {
  let array = [];
  for (let i = 0; i < countriesPerPage; i++) {
    array.push(i);
  }
  return (
    <StyledSkeleton>
      {array.map((el) => {
        return <img key={el} alt="key" src={skeleton} />;
      })}
    </StyledSkeleton>
  );
}

export default Loading;
