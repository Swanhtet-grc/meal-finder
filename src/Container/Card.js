import React from "react";
import "./Card.css";
import Details from "./Details";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from 'react-redux'

const card = (props) => {
    return (
        <BrowserRouter>

            <div className="Card" >
                <a href={props.address}>
                    <img src={props.mealType} className="img" /><h3>{props.mealName}</h3>
                </a>
            </div >

        </BrowserRouter>
    )
}

export default card;

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => dispatch({ type: 'INCREMENT' }),
    }
}
function Counter({ count, dispatch }) {
    return (
        <div>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    )
}
connect(mapStateToProps)(card)