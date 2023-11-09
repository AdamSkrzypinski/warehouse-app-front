import React from "react";
import { Btn } from "../../components/common/Btn/Btn";
import "./Not-found-view.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

export const NotFoundView = () => {
  return (
    <div className="not-found">
      <h2>Nie znaleziono takiej strony...</h2>
      <FontAwesomeIcon icon={faBug} className={"icon"} />
      <Btn text={"strona główna"} to={"/"} />
    </div>
  );
};
