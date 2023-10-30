import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../../config/api";
import { ProductEntityWithRelations } from "../../../types/product";
import "./Single-product-view.scss";
import { Btn } from "../../../components/common/Btn";

interface ProductArea {
  id: string;
  name: string;
}

export const SingleProductView = () => {
  const [product, setProduct] = useState<ProductEntityWithRelations | null>(
    null,
  );

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

  const productArea = product.productArea as any;
  const productPlace = product.productPlace as any;

  const createdAt = `${product.createdAt
    .toString()
    .slice(0, 10)} ${product.createdAt.toString().slice(11, 19)}`;

  return (
    <div className={"product-details"}>
      <table>
        <tbody>
          <tr>
            <th>Nazwa:</th>
            <td>{product.name}</td>
          </tr>
          <tr>
            <th>Ilość:</th>
            <td>
              {product.count} {product.measure}
            </td>
          </tr>
          <tr>
            <th>Data utworzenia:</th>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <th>Lokalizacja:</th>
            <td>
              {productArea.name}: {productPlace.name}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btns">
        <div className="action-btns">
          <Btn text={"Edytuj"}></Btn>
          <Btn text={"Usuń"} to={`/warehouse/product/delete/${product.id}`} />
        </div>
        <div className="navigation-btns">
          <Btn text={"wstecz"} to={`/warehouse/place/${productPlace.id}`} />
        </div>
      </div>
    </div>
  );
};
