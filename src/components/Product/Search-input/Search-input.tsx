import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn } from "../../common/Btn/Btn";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
    navigate(`/search/${searchValue}`);
  };

  return (
    <div className={"search"}>
      <form>
        <label>
          <input
            type={"text"}
            name={"searchValue"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={"Wyszukaj..."}
            minLength={3}
            maxLength={20}
          />
        </label>
        <Btn text={"szukaj"} to={`/search/${searchValue}`} />
      </form>
    </div>
  );
};
