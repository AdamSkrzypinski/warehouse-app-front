import React from "react";
import './Add-confirm-view.scss'
import {Btn} from "../../../components/common/Btn/Btn";

export const AddConfirmView = () => {
return <div className={'confirm-view'}>
    <h2>Pomyślnie dodano!</h2>
    <Btn text={'dodaj kolejny produkt'} to={'/add-product'}/>
</div>}