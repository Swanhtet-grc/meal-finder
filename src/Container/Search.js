import React from "react";
import "./Search.css"

const search = () => {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?">

                </input>
                <button className="bt" onClick="myFunction()"><i className="fas fa-search"></i></button>
            </div>
        </div>
    );
}

export default search;



