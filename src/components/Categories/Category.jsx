import React from "react";
import categoriesStyle from "./Categories.module.css"
import {NavLink, useParams} from "react-router-dom";


const Category =(props) =>{
    let pathLink = "/allProject/category/" + props.name;
    return(
        <NavLink to={pathLink} className={categoriesStyle.categoriesLink}>{props.name}</NavLink>

    )
}

export default Category
