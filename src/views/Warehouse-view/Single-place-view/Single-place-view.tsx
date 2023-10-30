import React, { useEffect, useState } from "react";
import { PlaceEntityWithRelations } from "../../../types/place";
import { Link, useParams } from "react-router-dom";
import { apiUrl } from "../../../config/api";
import "./single-place-view.scss";
import { SingleProductView } from "../Single-product-view/Single-product-view";
import { Btn } from "../../../components/common/Btn";

export const SinglePlaceView = () => {
  const [place, setPlace] = useState<PlaceEntityWithRelations | null>(null);

  const { placeId } = useParams();

  useEffect(() => {
    if (placeId) {
      (async () => {
        const res = await fetch(`${apiUrl}/location/place/${placeId}`);
        const data = await res.json();
        setPlace(data);
      })();
    }
  }, []);

  if (place === null) {
    return null;
  }

  return (
    <>
      <div className={"places"}>
        <h2>Lista produktów</h2>
        <div className="places-list">
          {place.products.map((product) => (
            <Link to={`/warehouse/${product.id}`} key={product.id}>
              <SingleProductView /> {product.name}
            </Link>
          ))}
        </div>
        <Btn text={"wstecz"} to={`/warehouse/area/${place.placeArea.id}`} />
      </div>
    </>
  );
};
