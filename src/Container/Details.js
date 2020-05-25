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
                <h2 className="title">{props.value}</h2>
                <Card mealType={props.imageLink} mealName={props.name} />
                <p>{category[0].strCategory}</p>
            </div >
        </BrowserRouter>
    )
}



function mapStateToProps(state) {
    return { value: state.value }
}

export default connect(mapStateToProps)(details)