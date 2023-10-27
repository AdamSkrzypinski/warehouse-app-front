import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Main-page-items.scss'


interface Props {
    text: string;
    icon:React.ReactNode;
    iconCount: number;
}

export const MainPageItems = (props: Props) => {
    const {iconCount, text, icon} = props

    return (<div className="add-product tile">
        <div className="icon">
            {iconCount === 2 && <FontAwesomeIcon icon={faPlus} size={'10x'} className={'plus-icon'}/>}
            {icon}
        </div>
        <p>{text}</p>
    </div>)
}