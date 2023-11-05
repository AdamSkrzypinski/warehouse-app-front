import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Btn} from "../../../components/common/Btn/Btn";
import {apiUrl} from "../../../config/api";
import {UpdateProductDto} from "../../../types/product";
import './Edit-product-view.scss'
import {AreaEntity} from "../../../types/area";
import {PlaceEntity} from "../../../types/place";
import {Spinner} from "../../../components/common/Spinner/Spinner";

export const EditProductView = () => {
    const {productId} = useParams()
    const [productToEdit, setProductToEdit] = useState<UpdateProductDto>({
        name: "",
        measure: "",
        count: 0,
        id: '',
        productAreaId: "3757d482-9c65-4e90-a549-effe6209fcb1",
        productPlaceId: '',
    })

    const [areasList, setAreasList] = useState<AreaEntity[] | []>([]);
    const [placesList, setPlacesList] = useState<PlaceEntity[] | []>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [confirmArea, setConfirmArea] = useState<boolean>(false)


    const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
    useEffect(() => {
        if (productId) {
            (async () => {
                const res = await fetch(`${apiUrl}/product/${productId}`);
                const data = await res.json();
                setProductToEdit({
                    productAreaId: data.productArea.id,
                    id: data.id,
                    name: data.name,
                    count: data.count,
                    measure: data.measure,
                    productPlaceId: data.productPlace.id
                });
            })();
        }
    }, [productId]);

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`${apiUrl}/location/area`);
                const data = await res.json();
                setAreasList(data);
            })();
        } catch (err) {
            console.log(err);
        }
    }, [productToEdit]);

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`${apiUrl}/location/area/${productToEdit.productAreaId}`);
                const data = await res.json();
                setPlacesList(data.places);
            })();
        } catch (err) {
            console.log(err);
        }

    }, [productToEdit, areasList]);

    useEffect(() => {
        if (
            productToEdit.name.length > 2 &&
            productToEdit.name.length < 70 &&
            productToEdit.count !== '' &&
            productToEdit.count < 999999 &&
            productToEdit.measure.length > 1 &&
            productToEdit.measure.length < 15 &&
            productToEdit.productPlaceId !== '' &&
            productToEdit.productAreaId !== ''
        ) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [productToEdit]);

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (productToEdit !== undefined) {
            setProductToEdit((productToEdit?) => ({
                ...productToEdit,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductToEdit((productToEdit) => ({
            ...productToEdit,
            productAreaId: e.target.value,
            productPlaceId: '',

        }))
    }
    const handlePlaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductToEdit((productToEdit) => ({
            ...productToEdit,
            productPlaceId: e.target.value,

        }))
    }


    const sendForm = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/product/`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    count: productToEdit.count,
                    measure: productToEdit.measure,
                    name: productToEdit.name,
                    productPlaceId: productToEdit.productPlaceId,
                    productAreaId: productToEdit.productAreaId,
                    id: productToEdit.id,
                }),
            });
            const data = await res.json();
            if (data.id) {
                console.log('ok')
                setConfirmArea(true)
            }
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner/>;
    }

    if (confirmArea) {
        return <div className={'confirm-area'}>
            <h2>pomyślnie zapisano!</h2>
            <Btn text={"wstecz"} to={`/warehouse/${productId}`}/>
        </div>
    }


    return <div className={'edit-product'}>
        <h2>Edytuj </h2>
        <form onSubmit={sendForm}>
            <label>
                <p>Nazwa:</p>
                <input
                    type={"text"}
                    name={"name"}
                    value={productToEdit.name}
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
                    value={productToEdit.count}
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
                    value={productToEdit.measure}
                    onChange={change}
                    placeholder={"szt, m3, kg etc."}
                    minLength={2}
                    maxLength={15}
                />
                <p className={"info"}>Od 2 do 15 znaków</p>
            </label>
            <label>
                Strefa:
                <select
                    name="area"
                    id="area"
                    value={productToEdit.productAreaId}
                    onChange={(e) => handleAreaChange(e)}
                >
                    {areasList.length > 0 && areasList?.map((area) => (
                        <option key={area.id} value={area.id}>
                            {area.name}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Miejsce:
                <select
                    name="place"
                    id="place"
                    value={productToEdit.productPlaceId}
                    onChange={(e) => handlePlaceChange(e)}
                >
                    <option value="" style={{color: 'grey'}}>
                        --Wybierz z listy--
                    </option>
                    {placesList && placesList?.map((place) => (
                        <option key={place.id} value={place.id}>
                            {place.name}
                        </option>
                    ))}
                </select>
            </label>

            <button
                disabled={btnDisabled}
                className={btnDisabled ? "disabled" : ""}
                type={"submit"}
            >
                Zapisz
            </button>
        </form>
        <Btn text={"wstecz"} to={`/warehouse/${productId}`}/>
    </div>

}