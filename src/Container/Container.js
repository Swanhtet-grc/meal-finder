import React from "react";
import Card from "./Card"
import "./Container.css";
import Search from "./Search"
import category from "./Category"
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom";

const container = (props) => {
    return (
        <BrowserRouter>
            <Search />
            <div className="Container" >
                {category.map(x =>
                    <Card mealType={x.strCategoryThumb} mealName={x.strCategory} address={"/details/" + x.strCategory}
                        cateNum={x.idCategory} />
                )}
            </div>
        </BrowserRouter>
    );
}


export default container;