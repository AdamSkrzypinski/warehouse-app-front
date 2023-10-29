import React, { useEffect, useState } from "react";
import { ProductEntity } from "../../../types/product";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../../config/api";

export const SinglePlaceView = () => {
  const [product, setProduct] = useState<ProductEntity | null>(null);

  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      (async () => {
        const res = await fetch(`${apiUrl}/product/${productId}`);
        const data = await res.json();
        setProduct(data);
      })();
    }
  }, []);

  if (product === null) {
    return null;
  }

  return <>{}</>;
};
