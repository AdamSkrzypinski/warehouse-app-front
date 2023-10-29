import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faPlusMinus,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import "./Main-page-view.scss";
import { MainPageItems } from "../../components/Main-page/Main-page-items/Main-page-items";
import { Link } from "react-router-dom";

export const MainPageView = () => {
  return (
    <div className={"home-page"}>
      <Link to={"/add-product"} className={"menu=item"}>
        <MainPageItems
          text={"Dodaj produkt"}
          icon={<FontAwesomeIcon icon={faBarcode} size={"10x"} />}
          iconCount={2}
        />
      </Link>
      <Link to={"/add-location"} className={"menu=item"}>
        <MainPageItems
          text={"Dodaj lokalizację"}
          icon={<FontAwesomeIcon icon={faWarehouse} size={"10x"} />}
          iconCount={2}
        />
      </Link>
      <Link to={"/warehouse"} className={"menu=item"}>
        <MainPageItems
          text={"Magazyn"}
          icon={<FontAwesomeIcon icon={faWarehouse} size={"10x"} />}
          iconCount={1}
        />
      </Link>
      <Link to={"/inventory"} className={"menu=item"}>
        <MainPageItems
          text={"Inwentaryzuj"}
          icon={<FontAwesomeIcon icon={faPlusMinus} size={"10x"} />}
          iconCount={1}
        />
      </Link>
    </div>
  );
};
