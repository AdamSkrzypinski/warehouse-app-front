import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { Link } from "react-router-dom";
import { SearchInput } from "../Product/Search-input/Search-input";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>
          Warehouse<span>App</span>
        </h1>
      </Link>
      <SearchInput />
    </header>
  );
};
