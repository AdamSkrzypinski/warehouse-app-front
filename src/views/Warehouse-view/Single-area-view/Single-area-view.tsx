import React, { useEffect, useState } from "react";
import { AreaEntityWithRelations } from "../../../types/area";
import { apiUrl } from "../../../config/api";
import { Link, useParams } from "react-router-dom";
import { SinglePlaceView } from "../Single-place-view/Single-place-view";
import { Btn } from "../../../components/common/Btn/Btn";
import { Spinner } from "../../../components/common/Spinner/Spinner";

export const SingleAreaView = () => {
  const [area, setArea] = useState<AreaEntityWithRelations | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { areaId } = useParams();

  useEffect(() => {
    if (areaId) {
      setLoading(true);
      try {
        (async () => {
          const res = await fetch(`${apiUrl}/location/area/${areaId}`);
          const data = await res.json();
          setArea(data);
          setLoading(false);
        })();
      } finally {
        setLoading(false);
      }
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (area === null) {
    return null;
  }

  if (area.places.length === 0) {
    return (
      <div className={"places"}>
        <h2>Strefa jest pusta</h2>
        <Btn text={"wstecz"} to={"/warehouse"}></Btn>
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
        <Btn text={"wstecz"} to={"/warehouse"}></Btn>
      </div>
    </>
  );
};
