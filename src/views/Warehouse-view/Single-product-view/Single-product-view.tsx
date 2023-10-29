import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../../config/api";
import { ProductEntity } from "../../../types/product";
import { OneProduct } from "../../../components/Product/One-product";

export const SingleProductView = () => {
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

  return (
    <div className={"product-details"}>
      <OneProduct product={product}></OneProduct>
    </div>
  );
};
