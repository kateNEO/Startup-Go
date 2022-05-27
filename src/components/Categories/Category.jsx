import React from "react";
import categoriesStyle from "./Categories.module.css"

// const Categories = (props) => {
//
//     let categoryElements = props.categoryData.map (category => <Category key= {category.id} name= {category.name}/>)
//     return(
//         <div className={categoriesStyle.categories}>
//             {categoryElements}
//         </div>
//     )
// }
const Category =(props) =>{
    return(
        <a className={categoriesStyle.categoriesLink}>{props.name}</a>
    )
}

export default Category
