import React, { useState } from "react";
import { Btn } from "../../common/Btn/Btn";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

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
        <Btn
          text={"szukaj"}
          to={`/search/${searchValue.length < 3 ? "undefined" : searchValue}`}
        />
      </form>
    </div>
  );
};
