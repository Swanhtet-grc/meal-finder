import React from "react";
import "./Card.css";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
export const card = (props) => {
    return (
        <BrowserRouter>
            <div className="Card" onClick={props.sendMessToStore} >
                <a href="/detail">
                    <img src={props.mealType} className="img" /><h3>{props.mealName}</h3>
                </a>
            </div >
        </BrowserRouter >
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessToStore: () => dispatch({ type: 'CLICKED' })
    }
}
export default connect(null, mapDispatchToProps)(card)