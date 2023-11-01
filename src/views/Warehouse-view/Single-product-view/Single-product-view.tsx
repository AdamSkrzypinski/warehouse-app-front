import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {apiUrl} from "../../../config/api";
import {ProductEntityWithRelations} from "../../../types/product";
import "./Single-product-view.scss";
import {Btn} from "../../../components/common/Btn";
import {OneProduct} from "../../../components/Product/One-product";


export const SingleProductView = () => {
        const [product, setProduct] = useState<ProductEntityWithRelations | null>(
            null,
        );
        const [dialogWindow, setDialogWindow] = useState<boolean>(false)
        const [confirmWindow, setConfirmWindow] = useState<boolean>(false)

        const {productId} = useParams();

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

        const openDialog = (e: React.SyntheticEvent) => {
            e.preventDefault()
            setDialogWindow(true)

        }

        const deleteProduct = (e: React.SyntheticEvent) => {
            e.preventDefault()
            try {
                (async () => {
                    const res = await fetch(`${apiUrl}/product/${product.id}`, {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    console.log(data)
                    setConfirmWindow(true)
                })();
            } catch
                (error) {
                throw error
            }
        }

        if (dialogWindow) {
            return <div className={'dialog-window'}>
                <div className={'text-section'}>


                    <p>
                        <strong>{!confirmWindow ? `Czy na pewno chcesz usunąć ${product.name} ?` : 'Pomyślnie usunięto.'}</strong>
                    </p>
                    <div className={'buttons'}>
                        {!confirmWindow ? <>
                            <button onClick={event => deleteProduct(event)}>usuń</button>
                            <button onClick={() => setDialogWindow(false)}>anuluj</button>
                        </> : <Btn text={'wstecz'} to={`/warehouse/place/${productPlace.id}`}/>}
                    </div>
                </div>
            </div>
        }

        return (
            <div className={"product-details"}>
                <OneProduct product={product} productArea={productArea.name} productPlace={productPlace.name}
                            createdAt={createdAt}/>
                <div className="btns">
                    <div className="action-btns">
                        <button onClick={(e) => openDialog(e)}>usuń</button>
                        <Btn text={"Usuń"}/>
                    </div>
                    <div className="navigation-btns">
                        <Btn text={"wstecz"} to={`/warehouse/place/${productPlace.id}`}/>
                    </div>
                </div>
            </div>
        );
    }
;
