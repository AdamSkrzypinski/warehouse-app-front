import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarcode, faPlusMinus, faWarehouse} from "@fortawesome/free-solid-svg-icons";
import './Main-page.scss'
import {MainPageItems} from "./Main-page-items/Main-page-items";

export const MainPage = () => {
    return (<div className={'home-page'}>

        <MainPageItems text={'Dodaj produkt'} icon={<FontAwesomeIcon
            icon={faBarcode} size={'10x'}/>} iconCount={2}/>
        <MainPageItems text={'Dodaj lokalizację'} icon={<FontAwesomeIcon
            icon={faWarehouse} size={'10x'}/>} iconCount={2}/>
        <MainPageItems text={'Magazyn'} icon={<FontAwesomeIcon
            icon={faWarehouse} size={'10x'}/>} iconCount={1}/>
        <MainPageItems text={'Inwentaryzuj'} icon={<FontAwesomeIcon icon={faPlusMinus} size={'10x'}/>} iconCount={1}/>



   </div>)
}