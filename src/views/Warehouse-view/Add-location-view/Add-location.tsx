import React, { useEffect, useState } from "react";
import "./Add-location.scss";
import { Btn } from "../../../components/common/Btn/Btn";
import { apiUrl } from "../../../config/api";
import { Spinner } from "../../../components/common/Spinner/Spinner";
import { AddPlaceView } from "./Add-place-view";

export const AddLocation = () => {
  const [areaName, setAreaName] = useState<string>("");
  const [addAreaBtnDisabled, setAddAreaBtnDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmPopup, setConfirmPopup] = useState<boolean>(false);

  const setPopup = () => {
    setConfirmPopup(true);
  };

  useEffect(() => {
    if (areaName.length > 2 && areaName.length < 51) {
      setAddAreaBtnDisabled(false);
    } else {
      setAddAreaBtnDisabled(true);
    }
  }, [areaName]);
  const sendAreaForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/location/area`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: areaName,
        }),
      });
      const data = await res.json();

      if (data.id !== undefined) {
        setLoading(false);
        setConfirmPopup(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    window.location.reload();
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="add-location">
      <div
        className="confirm-area"
        style={{ display: !confirmPopup ? "none" : "flex" }}
      >
        <h2>Pomyślnie dodano!</h2>
        <Btn text={"Dodaj kolejną lokalizację"} btnEvent={refresh} />
        <Btn text={"Strona główna"} to={"/"} />
      </div>
      <div className="add-area">
        <h2>Dodaj strefę</h2>
        <form onSubmit={sendAreaForm}>
          <label>
            <input
              type={"text"}
              name={"areaName"}
              value={areaName}
              onChange={(e) => setAreaName(e.target.value)}
              placeholder={"Podaj nazwę"}
              minLength={3}
              maxLength={50}
            />
            <p className={"info"}>Od 3 do 50 znaków</p>
          </label>
          <button
            disabled={addAreaBtnDisabled}
            className={addAreaBtnDisabled ? "disabled" : ""}
            type={"submit"}
          >
            Zapisz
          </button>
        </form>
      </div>
      <div className="add-place">
        <h2>Dodaj miejsce</h2>
        <AddPlaceView setPopup={setPopup} />
      </div>

      <Btn text={"Wstecz"} to={"/"} />
    </div>
  );
};
