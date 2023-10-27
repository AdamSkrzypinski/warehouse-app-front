import React from "react";
import "./App.scss";
import { Header } from "./components/layout/Header";
import { MainPage } from "./components/Main-page/Main-page";
import { Route, Routes } from "react-router-dom";
import { Warehouse } from "./components/Warehouse/Warehouse";

export const App = () => {
  return (
    <div className={"app"}>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/warehouse"} element={<Warehouse />} />
      </Routes>
    </div>
  );
};
