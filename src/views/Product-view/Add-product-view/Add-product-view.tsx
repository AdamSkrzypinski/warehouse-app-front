import React, {useEffect, useState} from "react";
import "./Add-product-view.scss";
import {CreateProductDto} from "../../../types/product";
import {Spinner} from "../../../components/common/Spinner/Spinner";
import {apiUrl} from "../../../config/api";
import {LocationSelect} from "../../../components/Warehouse/Location-select/Location-select";

export const AddProductView = () => {
    const [product, setProduct] = useState<CreateProductDto>({
        name: "",
        measure: "",
        count: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);

    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    const [newProductId, setNewProductId] = useState<string | null>(null);

    console.log(newProductId)
    const sendForm = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/product`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(product),
            });
            const data = await res.json();
            if (data.id !== undefined) {
                setNewProductId(data.id)
                setLoading(false)
            }
        } finally {
            setLoading(false);
        }
    };

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct((product) => ({
            ...product,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        if (
            product.name.length > 2 &&
            product.name.length < 70 &&
            product.count !== '' &&
            product.count < 999999 &&
            product.measure.length > 1 &&
            product.measure.length < 15
        ) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [product]);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <>
            <div className={"add-product"}>
                <h2>Dodaj produkt</h2>
                <div
                    className={"disabled-area"}
                    style={{display: newProductId ? "flex" : "none"}}
                >
                    <h3>ZAPISANO!</h3>
                </div>
                <form onSubmit={sendForm}>
                    <label>
                        <p>Nazwa:</p>
                        <input
                            type={"text"}
                            name={"name"}
                            value={product.name}
                            onChange={change}
                            placeholder={"Podaj nazwę"}
                            minLength={3}
                            maxLength={70}
                        />
                        <p className={"info"}>Od 3 do 70 znaków</p>
                    </label>
                    <label>
                        <p> Ilość:</p>
                        <input
                            type={"number"}
                            name={"count"}
                            value={product.count}
                            onChange={change}
                            placeholder={"Podaj ilość"}
                            max={999999}
                        />
                        <p className={"info"}>Od 0 do 999999</p>
                    </label>
                    <label>
                        <p>Jednostka:</p>
                        <input
                            type={"text"}
                            name={"measure"}
                            value={product.measure}
                            onChange={change}
                            placeholder={"szt, m3, kg etc."}
                            minLength={2}
                            maxLength={15}
                        />
                        <p className={"info"}>Od 2 do 15 znaków</p>
                    </label>

                    <button
                        disabled={btnDisabled}
                        className={btnDisabled ? "disabled" : ""}
                        type={"submit"}
                    >
                        Zapisz
                    </button>
                </form>
            </div>
            <div className={"location-select"}>
                <LocationSelect product={product} newProductId={newProductId}/>
            </div>
        </>
    );
};
