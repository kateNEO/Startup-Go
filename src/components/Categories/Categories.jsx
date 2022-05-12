import React from "react";
import categoriesStyle from "./Categories.module.css"

const Categories = (props) => {
    return(
        <div className={categoriesStyle.categories}>
            <a className={categoriesStyle.categoriesLink}>Arts</a>
            <a className={categoriesStyle.categoriesLink}>Comics & Illustration</a>
            <a className={categoriesStyle.categoriesLink}>Design & Tech</a>
            <a className={categoriesStyle.categoriesLink}>Film</a>
            <a className={categoriesStyle.categoriesLink}>Food & Craft</a>
            <a className={categoriesStyle.categoriesLink}>Games</a>
            <a className={categoriesStyle.categoriesLink}>Music</a>
            <a className={categoriesStyle.categoriesLink}>Publishing</a>
        </div>

    )
}

export default Categories
