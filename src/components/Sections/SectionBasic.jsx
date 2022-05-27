import React from "react";
import styleSectionBasic from "./SectionBasic.module.css"
import CreateProject from "../CreateProject/CreateProject";
import Category from "../Categories/Category";

const SectionBasic = (props) => {
    let categoryOptions = props.categoryData.map (categoryOptions => <option className={styleSectionBasic.options} key= {categoryOptions.id} value= {categoryOptions.name}>{categoryOptions.name}</option>)
    return (
        <div>
            <CreateProject menuItemData={props.menuItemData}/>
            <div className={styleSectionBasic.basicWrapper}>
                <div className={styleSectionBasic.headerBasic}>
                    Basic information
                </div>
                <p className={styleSectionBasic.nameProject}>Project Name</p>
                <input className={styleSectionBasic.inputText} type={"text"}/>
                <p>Cover</p>
                <div className={styleSectionBasic.uploader}>
                    <div className={styleSectionBasic.preview}>
                        <img src=""/>
                    </div>
                    <label htmlFor="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                </div>
                <p className={styleSectionBasic.shortDescription}>Short description</p>
                <input className={styleSectionBasic.inputText} type={"text"}/>
                <p>Select a category</p>
                <select className={styleSectionBasic.select} name="category" id="category">
                    {categoryOptions}
                    <option className={styleSectionBasic.option}></option>
                </select>

            </div>
        </div>


    )
}

export default SectionBasic