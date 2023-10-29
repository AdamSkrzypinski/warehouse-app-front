import React, { useEffect, useState } from "react";
import { AreaEntityWithRelations } from "../../../types/area";
import { apiUrl } from "../../../config/api";
import { Link, useParams } from "react-router-dom";
import { SinglePlaceView } from "../Single-place-view/Single-place-view";
import { WarehouseView } from "../Warehouse-view";

export const SingleAreaView = () => {
  const [area, setArea] = useState<AreaEntityWithRelations | null>(null);

  const { areaId } = useParams();

  useEffect(() => {
    if (areaId) {
      (async () => {
        const res = await fetch(`${apiUrl}/location/area/${areaId}`);
        const data = await res.json();
        setArea(data);
      })();
    }
  }, []);

  if (area === null) {
    return null;
  }

  if (area.places.length === 0) {
    return (
      <div className={"places"}>
        <h2>Strefa jest pusta</h2>
        <Link to={`/warehouse/`}>Powrót do listy stref</Link>
      </div>
    );
  }

  return (
    <>
      <div className={"places"}>
        <h2>Wybierz miejsce</h2>
        <div className="places-list">
          {area.places.map((place) => (
            <Link to={`/warehouse/place/${place.id}`} key={place.id}>
              <SinglePlaceView /> {place.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
