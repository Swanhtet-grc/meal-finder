import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Card from "./Card";
import category from "./Category";
import { connect } from 'react-redux'
import "./Details.css";



export const details = (props) => {

    return (
        <BrowserRouter>
            <div className="Details">
                <h2 className="title">Category Detail Page</h2>
                <Card mealType={props.imageLink} mealName={props.name} />
                <i className="detailHeader"><strong>Category Name:</strong> {category[0].strCategory}</i>
                <i className="detailNo"><strong>Category Number:</strong></i>
                <i className="detailDescription"><strong>Category Description:</strong> {category[0].strCategoryDescription}</i>
                <i className="detailAdded">Search for Specific Meal Name</i>
            </div >
        </BrowserRouter>
    )
}



const mapStateToProps = (state) => {
    return { value: state.value }
}

export default connect(mapStateToProps)(details)