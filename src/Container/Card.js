import React from "react";
import "./Card.css"

const card = (props) => {
    var num = props.num;
    return (
        <div className="Card" onClick={() => { props.click(num) }}>
            <img src={props.mealType} className="img" /><h3>{props.mealName}</h3></div>
    )
}

export default card;