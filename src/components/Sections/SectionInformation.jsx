import React from "react";
import CreateProject from "../CreateProject/CreateProject";
import styleSectionBasic from "./Sections.module.css"

const SectionInformation = (props) => {
    return (
        <div>
            <CreateProject menuItemData={props.menuItemData}/>
            <div className={styleSectionBasic.headerSections}>
                About project
            </div>
            <div className={styleSectionBasic.basicWrapper}>
                <p className={styleSectionBasic.headerInput}>Project description</p>
                <input className={styleSectionBasic.inputText} type={"text"}/>
            </div>
        </div>
    )
}

export default SectionInformation