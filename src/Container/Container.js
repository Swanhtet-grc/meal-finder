import React from "react";
import Card from "./Card"
import "./Container.css"
const container = () => {
    return (
        <div className="Container">
            <Card mealType="https://www.themealdb.com/images/category/beef.png" mealName="Beef" />
            <Card mealType={"https://www.themealdb.com/images/category/chicken.png"} mealName="Cicken" />
            <Card mealType={"https://www.themealdb.com/images/category/dessert.png"} mealName="Dessert" />
            <Card mealType={"https://www.themealdb.com/images/category/lamb.png"} mealName="Lamb" />
            <Card mealType={"https://www.themealdb.com/images/category/miscellaneous.png"} mealName="Miscellaneous" />
            <Card mealType={"https://www.themealdb.com/images/category/pasta.png"} mealName="Pasta" />
            <Card mealType={"https://www.themealdb.com/images/category/pork.png"} mealName="Pork" />
            <Card mealType={"https://www.themealdb.com/images/category/seafood.png"} mealName="Seafood" />
            <Card mealType={"https://www.themealdb.com/images/category/side.png"} mealName="Side" />
            <Card mealType={"https://www.themealdb.com/images/category/starter.png"} mealName="Starter" />
            <Card mealType={"https://www.themealdb.com/images/category/vegan.png"} mealName="Vegan" />
            <Card mealType={"https://www.themealdb.com/images/category/vegetarian.png"} mealName="Vegetarian" />
            <Card mealType={"https://www.themealdb.com/images/category/breakfast.png"} mealName="Breakfast" />
            <Card mealType={"https://www.themealdb.com/images/category/goat.png"} mealName="Goat" />
        </div>

    );
}

export default container;

