import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Card from "./Card"
import "./Details.css"
const details = (props) => {
    return (
        <BrowserRouter>
            <div className="Details">
                <h2 className="title">Details Page</h2>
                <Card mealType={props.imageLink} mealName={props.name} />
            </div >
        </BrowserRouter>
    )
}

export default details;