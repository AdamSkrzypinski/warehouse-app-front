import React from "react";
import {ProductEntity} from "../../types/product";
import "./One-product.scss";

interface Props {
    product: ProductEntity;
    productArea: string;
    productPlace: string;
    createdAt: string;
}

export const OneProduct = (props: Props) => {
    const {name,count, measure} = props.product;
    const {createdAt, productPlace, productArea} = props
    return (
        <table>
            <tbody>
            <tr>
                <th>Nazwa:</th>
                <td>{name}</td>
            </tr>
            <tr>
                <th>Ilość:</th>
                <td>
                    {count} {measure}
                </td>
            </tr>
            <tr>
                <th>Data utworzenia:</th>
                <td>{createdAt}</td>
            </tr>
            <tr>
                <th>Lokalizacja:</th>
                <td>
                    {productArea}: {productPlace}
                </td>
            </tr>
            </tbody>
        </table>
    )

};
