import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductEntity } from "../../../types/product";
import { getProduct } from "../../utils/getProduct";
import { apiUrl } from "../../../config/api";

export const DeleteProductView = () => {
  const [product, setProduct] = useState<ProductEntity | null>(null);

  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      (async () => {
        const data = await getProduct(productId);
        console.log(data);
        setProduct(data);
      })();
    }
  }, []);

  if (product === null) {
    return null;
  }
  return <h3>Czy na pewno chcesz usunąć '{product?.name}'?</h3>;
};
