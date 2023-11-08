import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductEntity } from "../../../types/product";
import { apiUrl } from "../../../config/api";
import { SingleProductView } from "../Single-product-view/Single-product-view";
import { Btn } from "../../../components/common/Btn/Btn";
import "./Search-view.scss";

export const SearchView = () => {
  const params = useParams();
  const { value } = params;
  const [searchResult, setSearchResult] = useState<ProductEntity[]>([]);

  useEffect(() => {
    if (value) {
      (async () => {
        const res = await fetch(`${apiUrl}/product/search/${value}`);
        const data = await res.json();
        setSearchResult(data);
      })();
    }
  }, [params, value]);

  if (searchResult.length === 0) {
    return null;
  }

  return (
    <>
      <div className={"search-result"}>
        <h2>Wyniki wyszukiwania</h2>
        <div className="search-result-list">
          {searchResult.map((product) => (
            <Link to={`/warehouse/${product.id}`} key={product.id}>
              <SingleProductView /> {product.name}
            </Link>
          ))}
        </div>
        <Btn text={"Strona główna"} to={"/"} />
      </div>
    </>
  );
};
