import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
      <p class = "header-score"> Score: {props.score} | High Score: {props.highScore}</p>
      <p class = "header-ins"> Click on a Pokemon to earn points, but don't click on any more than once. </p>
  </div>;
}

export default Title;
