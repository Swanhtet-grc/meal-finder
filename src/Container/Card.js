import React from "react";
import "./Card.css";
import Details from "./Details";
import { BrowserRouter, Link } from "react-router-dom";

const card = (props) => {
    return (
        <BrowserRouter>

            <div className="Card">
                <a href={props.address}>
                    <img src={props.mealType} className="img" /><h3>{props.mealName}</h3>
                </a>
            </div >

        </BrowserRouter>
    )
}

export default card;