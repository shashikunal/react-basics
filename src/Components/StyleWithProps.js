import React from "react";
import "./StyleWithProps-styles.css";

const StyleWithProps = (props) => {
  let isSuccess = props.success ? "btn-success" : "btn-danger";
  return (
    <div>
      <h1>I am Style Component with props</h1>
      <button className={`btn ${isSuccess}`}>Success</button>
    </div>
  );
};

export default StyleWithProps;
