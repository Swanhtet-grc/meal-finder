import React from "react";
import "./Card.css";
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'

const card = (props) => {
    let address = `/detail/${props.mealName}`
    return (
        <BrowserRouter>
            <div className="Card"  >
                <a href={address}>
                    <img src={props.mealType} className="img" /><h3>{props.mealName}</h3>
                </a>
            </div >
        </BrowserRouter >
    )
}

export default card;