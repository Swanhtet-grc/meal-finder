import React from "react";
import Card from "./Card"
import "./Container.css";
import Search from "./Search"
import { BrowserRouter, Route, Link } from "react-router-dom";
const container = () => {
    return (
        <BrowserRouter>
            <Search />
            <div className="Container">
                <Card mealType="https://www.themealdb.com/images/category/beef.png" mealName="Beef" address="/details/beef" />
                <Card mealType="https://www.themealdb.com/images/category/chicken.png" mealName="Cicken" address="/details/chicken" />
                <Card mealType="https://www.themealdb.com/images/category/dessert.png" mealName="Dessert" address="/details/dessert" />
                <Card mealType="https://www.themealdb.com/images/category/lamb.png" mealName="Lamb" address="/details/lamb" />
                <Card mealType="https://www.themealdb.com/images/category/miscellaneous.png" mealName="Miscellaneous" address="/details/miscellaneous" />
                <Card mealType="https://www.themealdb.com/images/category/pasta.png" mealName="Pasta" address="/details/pasta" />
                <Card mealType="https://www.themealdb.com/images/category/pork.png" mealName="Pork" address="/details/pork" />
                <Card mealType="https://www.themealdb.com/images/category/seafood.png" mealName="Seafood" address="/details/seafood" />
                <Card mealType="https://www.themealdb.com/images/category/side.png" mealName="Side" address="/details/side" />
                <Card mealType="https://www.themealdb.com/images/category/starter.png" mealName="Starter" address="/details/starter" />
                <Card mealType="https://www.themealdb.com/images/category/vegan.png" mealName="Vegan" address="/details/vegan" />
                <Card mealType="https://www.themealdb.com/images/category/vegetarian.png" mealName="Vegetarian" address="/details/vegetarian" />
                <Card mealType="https://www.themealdb.com/images/category/breakfast.png" mealName="Breakfast" address="/details/breakfast" />
                <Card mealType="https://www.themealdb.com/images/category/goat.png" mealName="Goat" address="/details/goat" />
            </div>
        </BrowserRouter>
    );
}

export default container;

