import React, { useEffect, useState } from "react";
import { PlaceEntityWithRelations } from "../../../types/place";
import { apiUrl } from "../../../config/api";

export const PlacesView = () => {
  const [placesList, setPlacesList] = useState<
    PlaceEntityWithRelations[] | null
  >(null);
  //
  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/location/place`);
      const data = await res.json();
      setPlacesList(data);
    })();
  }, []);

  if (placesList === null) {
    return <p>Loading...</p>;
  }

  return <></>;
};
