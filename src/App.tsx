import React from "react";
import "./App.scss";
import { Header } from "./components/layout/Header";
import { MainPageView } from "./views/Main-page-view/Main-page-view";
import { Route, Routes } from "react-router-dom";
import { WarehouseView } from "./views/Warehouse-view/Warehouse-view";
import { SingleAreaView } from "./views/Warehouse-view/Single-area-view/Single-area-view";
import { NotFoundView } from "./views/Not-found-view/Not-found-view";
import { SingleProductView } from "./views/Warehouse-view/Single-product-view/Single-product-view";
import { SinglePlaceView } from "./views/Warehouse-view/Single-place-view/Single-place-view";
import { DeleteProductView } from "./views/Warehouse-view/Delete-product-view/Delete-product-view";

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
        <Route
          path={"/warehouse/product/delete/:productId"}
          element={<DeleteProductView />}
        />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};
