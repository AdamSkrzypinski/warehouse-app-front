import React from 'react';
import './App.scss';

import {Header} from "./components/layout/Header";
import {MainPage} from "./components/Main-page/Main-page";

export const App = () => {
    return (
        <div className={'app'}>
            <Header/>
            <MainPage/>



        </div>
    );
}
