import React from "react";
import "./Spinner.css";

export const Spinner = () => (
  <div className={"spinner"}>
    <div className="loader"></div>
    <p className={"info"}>Wczytywanie...</p>
  </div>
);
