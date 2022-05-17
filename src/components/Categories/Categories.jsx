import React from "react";
import categoriesStyle from "./Categories.module.css"

const Categories = (props) => {
    let categoryData =[
        {id:1, name: 'Arts'},
        {id:2, name: 'Comics & Illustration'},
        {id:3, name: 'Design & Tech'},
        {id:4, name: 'Film'},
        {id:5, name: 'Food & Craft'},
        {id:6, name: 'Music'},
        {id:7, name: 'Games'},
        {id:8, name: 'Publishing'}
    ]
    let CategoryElements = categoryData.map (category => <Category key= {category.id} name= {category.name}/>)
    return(
        <div className={categoriesStyle.categories}>
            {CategoryElements}
        </div>
    )
}
const Category =(props) =>{
    return(
        <a className={categoriesStyle.categoriesLink}>{props.name}</a>
    )
}

export default Categories
