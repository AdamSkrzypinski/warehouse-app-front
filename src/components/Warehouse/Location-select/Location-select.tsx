import React, {useEffect, useState} from "react";
import {AreaEntity} from "../../../types/area";
import {apiUrl} from "../../../config/api";
import "./Location-select.scss";
import {PlaceEntity} from "../../../types/place";
import {Spinner} from "../../common/Spinner/Spinner";
import {CreateProductDto} from "../../../types/product";
import { useNavigate} from "react-router-dom";

interface Props {
    newProductId: string | null;
    product: CreateProductDto
}

export const LocationSelect = (props: Props) => {
    const [areasList, setAreasList] = useState<AreaEntity[] | []>([]);

    const [selectedArea, setSelectedArea] = useState<string>(
        "3757d482-9c65-4e90-a549-effe6209fcb1",
    );
    const [placesList, setPlacesList] = useState<PlaceEntity[] | []>([])

    const [selectedPlace, setSelectedPlace] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate()



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

    }, [selectedArea, selectedPlace]);

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`${apiUrl}/location/area/${selectedArea}`);
                const data = await res.json();
                setPlacesList(data.places);
            })();
        } catch (err) {
            console.log(err);
        }

    }, [selectedArea, selectedPlace]);

    const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedArea(e.target.value);
        setSelectedPlace('')
    }
    const sendForm = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/product/`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    ...props.product,
                    productPlaceId: selectedPlace,
                    productAreaId: selectedArea,
                    id: props.newProductId
                }),
            });
            const data = await res.json();
            if (data.id) {
                console.log('ok')
                navigate('/add-product/confirm')
            }

        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner/>;
    }


    return (
        <div className={"location-select"}>
            <div
                className={"disabled-area"}
                style={{display: props.newProductId === null ? "flex" : "none"}}
            >

            </div>
            <div className={'place-select'}><h2>Wybierz lokalizację</h2>
                <form>
                    <label>
                        Strefa:
                        <select
                            name="area"
                            id="area"
                            value={selectedArea}
                            onChange={(e) => handleAreaChange(e)}
                        >
                            {areasList.length > 0 && areasList?.map((area) => (
                                <option key={area.id} value={area.id}>
                                    {area.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </form>
            </div>
            <div className={'place-select'}>
                <form>
                    <label>
                        Miejsce:
                        <select
                            name="place"
                            id="place"
                            value={selectedPlace}
                            onChange={(e) => setSelectedPlace(e.target.value)}
                        >
                            <option value="" style={{color: 'grey'}}>
                                --Wybierz z listy--
                            </option>
                            {placesList.length > 0 && placesList?.map((place) => (
                                <option key={place.id} value={place.id}>
                                    {place.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button className={selectedPlace === '' ? "disabled-btn" : ""}
                            onClick={sendForm}>Zapisz
                    </button>
                </form>
            </div>
        </div>
    );
};
