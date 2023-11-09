import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import "./Invertory-view.scss";

export const InventoryView = () => {
  return (
    <div className="inventory">
      <FontAwesomeIcon icon={faPersonDigging} className={"icon"} />
      <h2>W budowie...</h2>
    </div>
  );
};
