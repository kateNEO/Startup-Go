import React from "react";
import styleSectionBasic from "./SectionBasic.module.css"
import CreateProject from "../CreateProject/CreateProject";

const SectionBasic = () => {
    return (
        <div>
            <CreateProject/>
            <div className={styleSectionBasic.basicWrapper}>
                <div className={styleSectionBasic.headerBasic}>
                    Basic information
                </div>
                <form className={styleSectionBasic.basicForm}>
                    <p className={styleSectionBasic.nameProject}>Project Name</p>
                    <input type={"text"}/>
                </form>
            </div>
        </div>


    )
}

export default SectionBasic