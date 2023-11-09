import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../config/api";
import { Spinner } from "../../../components/common/Spinner/Spinner";
import { AreaEntity } from "../../../types/area";

interface Props {
  setPopup: Function;
}

export const AddPlaceView = (props: Props) => {
  const [placeName, setPlaceName] = useState<string>("");
  const [areasList, setAreasList] = useState<AreaEntity[] | []>([]);
  const [selectedArea, setSelectedArea] = useState(
    "641721ab-1ed5-4278-a4d2-c498fd893940",
  );
  const [addPlaceBtnDisabled, setAddPlaceBtnDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    if (placeName.length > 2 && placeName.length < 51) {
      setAddPlaceBtnDisabled(false);
    } else {
      setAddPlaceBtnDisabled(true);
    }
  }, [placeName]);

  const sendPlaceForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/location/place`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: placeName,
          areaId: selectedArea,
        }),
      });
      const data = await res.json();

      if (data.id !== undefined) {
        setLoading(false);
        props.setPopup();
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <form onSubmit={sendPlaceForm}>
      <label>
        <input
          type={"text"}
          name={"placeName"}
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
          placeholder={"Podaj nazwę"}
          minLength={3}
          maxLength={50}
        />
        <p className={"info"}>Od 3 do 50 znaków</p>
      </label>
      <label>
        Strefa:
        <select
          name="area"
          id="area"
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
        >
          {areasList.length > 0 &&
            areasList?.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
        </select>
      </label>
      <button
        disabled={addPlaceBtnDisabled}
        className={addPlaceBtnDisabled ? "disabled" : ""}
        type={"submit"}
      >
        Zapisz
      </button>
    </form>
  );
};
