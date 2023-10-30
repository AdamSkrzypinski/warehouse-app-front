import React from "react";
import { Link } from "react-router-dom";
import "./Btn.scss";

interface Props {
  text: string;
  to?: string;
  value?: string;
}

export const Btn = (props: Props) =>
  props.to ? (
    <Link className="btn" to={props.to}>
      {props.text}
    </Link>
  ) : (
    <button>{props.text}</button>
  );
