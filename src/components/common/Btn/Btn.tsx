import React, {MouseEventHandler} from "react";
import { Link } from "react-router-dom";
import "./Btn.scss";

interface Props {
  text: string;
  to?: string;
  value?: string;
  btnEvent?: MouseEventHandler;
}

export const Btn = (props: Props) =>
  props.to ? (
    <Link className="btn" to={props.to}>
      {props.text}
    </Link>
  ) : (
    <button onClick={props.btnEvent}>{props.text}</button>
  );
