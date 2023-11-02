import React, { useEffect, useState } from "react";
import { AreaEntity } from "../../../../types/area";
import { apiUrl } from "../../../../config/api";
import "./Location-select.scss";

export const LocationSelect = () => {
  const [areasList, setAreasList] = useState<AreaEntity[] | null>(null);

  const [selectedArea, setSelectedArea] = useState<string>(
    "3757d482-9c65-4e90-a549-effe6209fcb1",
  );

  console.log(selectedArea);

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
  }, []);

  return (
    <div className={"location-select"}>
      <h2>Wybierz lokalizację</h2>
      <form>
        <label>
          Strefa:
          <select
            name="area"
            id="area"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {areasList?.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};
