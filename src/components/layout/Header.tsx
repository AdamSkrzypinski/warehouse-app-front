import React from "react";

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
