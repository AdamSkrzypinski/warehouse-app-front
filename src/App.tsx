import React from "react";
import "./App.scss";
import { Header } from "./components/layout/Header";
import { MainPageView } from "./views/Main-page-view/Main-page-view";
import { Route, Routes } from "react-router-dom";
import { WarehouseView } from "./views/Warehouse-view/Warehouse-view";
import { SingleAreaView } from "./views/Warehouse-view/Single-area-view/Single-area-view";
import { NotFoundView } from "./views/Not-found-view/Not-found-view";
import { SingleProductView } from "./views/Product-view/Single-product-view/Single-product-view";
import { SinglePlaceView } from "./views/Warehouse-view/Single-place-view/Single-place-view";

import { AddProductView } from "./views/Product-view/Add-product-view/Add-product-view";
import { AddConfirmView } from "./views/Product-view/Add-confirm-view/Add-confirm-view";
import { EditProductView } from "./views/Product-view/Edit-product-view/Edit-product-view";
import { AddLocation } from "./views/Warehouse-view/Add-location-view/Add-location";
import { SearchView } from "./views/Product-view/Search-view/Search-view";
import { InventoryView } from "./views/Inventory-view/Inventory-view";

export const App = () => {
  return (
    <div className={"app"}>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPageView />} />
        <Route path={"/warehouse"} element={<WarehouseView />} />
        <Route path={"/warehouse/area/:areaId"} element={<SingleAreaView />} />
        <Route
          path={"/warehouse/place/:placeId"}
          element={<SinglePlaceView />}
        />
        <Route path={"/warehouse/:productId"} element={<SingleProductView />} />
        <Route path={"/add-product"} element={<AddProductView />} />
        <Route path={"/add-product/confirm"} element={<AddConfirmView />} />
        <Route
          path={"/product/edit/:productId"}
          element={<EditProductView />}
        />
        <Route path={"/add-location"} element={<AddLocation />} />
        <Route path={"/search/:value"} element={<SearchView />} />
        <Route path={"/inventory"} element={<InventoryView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};
