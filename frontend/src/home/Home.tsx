import React, {FC} from "react";
import "./home.scss";
import {Navbar} from "../components/navbar/Navbar";
import {Featured} from "../components/featured/Featured";
import {List} from "../components/list/List";

export const Home = ():JSX.Element => {
    return (
        <div className={'home'}>
            <Navbar/>
            <Featured type={"movie"}/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
}
