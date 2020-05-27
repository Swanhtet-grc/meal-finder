import React from "react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";
import "./Details.css";


const details = (props) => {
    return (
        <BrowserRouter>
            <div className="Details">
                <h2 className="title">Category Detail Page</h2>
                <Card mealType={props.imageLink} mealName={props.name} />
                <i className="detailHeader"><strong>Category Name:</strong> {props.name}</i>
                <i className="detailNo"><strong>Category Number:</strong> {props.idCategory}</i>
                <i className="detailDescription"><strong>Category Description:</strong> {props.strCategoryDescription}</i>
                <a href="/" className="detailAdded"><i >Search for Specific Meal Name</i></a>
            </div >
        </BrowserRouter>
    )
}

export default details;