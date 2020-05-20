import React from "react";
import Card from "./Card"
import "./Container.css"
const container = () => {
    return (
        <div className="Container">
            <Card mealType="https://www.themealdb.com/images/category/beef.png" />
            <Card mealType={"https://www.themealdb.com/images/category/chicken.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/dessert.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/lamb.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/miscellaneous.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/pasta.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/pork.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/seafood.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/side.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/starter.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/vegan.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/vegetarian.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/breakfast.png"} />
            <Card mealType={"https://www.themealdb.com/images/category/goat.png"} />
        </div>

    );
}

export default container;

