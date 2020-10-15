import React from 'react'
import Details from './Details'
import Category from './Category'

const DetailCon = (props) => {
    let currentUrl = window.location.href;
    let mealName = currentUrl.split("/")[4]
    console.log(mealName);
    let y = 0;
    let obj = Category.filter(x => x.strCategory === mealName)
    return (
        <div>
            <Details imageLink={obj[0].strCategoryThumb} name={obj[0].strCategory} idCategory={obj[0].idCategory} strCategoryDescription={obj[0].strCategoryDescription} />
        </div>
    )
}

export default DetailCon;
