import React from "react";
import "./Card.css";
import { BrowserRouter, Link } from "react-router-dom";

const card = (props) => {
    var num = props.num;
    return (

        <BrowserRouter>

            <div className="Card">
                <a href="https://swanhtet.com">
                    <img src={props.mealType} className="img" /><h3>{props.mealName}</h3>
                </a>
            </div >

        </BrowserRouter>
    )
}

export default card;