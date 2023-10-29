import React from "react";
import { ProductEntity } from "../../types/product";
import "./One-product.scss";

interface Props {
  product: ProductEntity;
}

export const OneProduct = (props: Props) => {
  const { name } = props.product;

  return <h2>{name}</h2>;
};
