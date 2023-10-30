import React from "react";
import { AreaEntity } from "../../types/area";
import "./Areas-list.scss";
import { Link } from "react-router-dom";
import { SingleAreaView } from "../../views/Warehouse-view/Single-area-view/Single-area-view";
import { Btn } from "../common/Btn";

interface Props {
  areas: AreaEntity[];
}

export const AreasList = (props: Props) => {
  return (
    <div className={"areas"}>
      <h2>Wybierz strefę</h2>
      <div className="areas-list">
        {props.areas.map((area) => (
          <Link to={`/warehouse/area/${area.id}`} key={area.id}>
            <SingleAreaView /> {area.name}
          </Link>
        ))}
      </div>
      <Btn text={"wstecz"} to={"/"} />
    </div>
  );
};
