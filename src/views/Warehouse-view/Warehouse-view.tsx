import React, {useEffect, useState} from "react";
import {AreaEntity} from "../../types/area";
import {apiUrl} from "../../config/api";
import {AreasList} from "../../components/Warehouse/Areas-list";
import {Btn} from "../../components/common/Btn";
import {log} from "util";

export const WarehouseView = () => {
    const [areasList, setAreasList] = useState<AreaEntity[] | null>(null);
    //
    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`${apiUrl}/location/area`);
                const data = await res.json();
                setAreasList(data);
            })();
        } catch (err) {
            console.log(err)
        }
    }, []);

    if (areasList === null) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <AreasList areas={areasList}/>
        </>
    );
};
