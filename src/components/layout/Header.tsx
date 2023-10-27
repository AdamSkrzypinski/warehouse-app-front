import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './Header.scss'

export const Header = () => {
    return (
        <header>
            <h1>Warehouse<span>App</span></h1>
            <div className={'search'}>
                <input type="text"/>
                <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>

        </header>)
}