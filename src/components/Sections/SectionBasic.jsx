import React from "react";
import styleSectionBasic from "./Sections.module.css"
import CreateProject from "../CreateProject/CreateProject";
import {NavLink} from "react-router-dom";
import * as textEditor from "./textEditor"
class SectionBasic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgURL: "https://www.sollunaresort.com/images/default_img.png",
            categoryData: props.categoryData,
            menuItemData: props.menuItemData
        }
    }

    changeImg = (e) => {
        let files = e.target.files;
        let newImgURL = URL.createObjectURL(files[0]);
        this.setState({ imgURL : newImgURL });
        console.log(this.state.imgURL);

    }

   createImg() {
        return(
            <div className={styleSectionBasic.preview}>
                <img id="img" className={styleSectionBasic.imgPreview} src={this.state.imgURL}/>
            </div>
        )
    }

    render() {

        let categoryOptions = this.state.categoryData.map(categoryOptions => <option className={styleSectionBasic.option}
                                                                                     key={categoryOptions.id}
                                                                                     value={categoryOptions.name}>{categoryOptions.name}</option>)
        return (
            <div className={styleSectionBasic.sectionWrapper}>
                <CreateProject menuItemData={this.state.menuItemData}/>
                <div className={styleSectionBasic.headerSections}>
                    Basic information
                </div>
                <div className={styleSectionBasic.basicWrapper}>
                    <p className={styleSectionBasic.headerInput}>Project Name</p>
                    <input className={styleSectionBasic.inputText} type={"text"}/>
                    <p className={styleSectionBasic.headerInput}>Cover</p>
                    <div className={styleSectionBasic.uploader}>
                        <input className={styleSectionBasic.inputFile} onChange={this.changeImg} type="file" id="input"
                               name="img" accept="image/*"/>
                        {this.createImg()}
                        <p className={styleSectionBasic.labelImg}>Loader image</p>
                    </div>
                    <p className={styleSectionBasic.headerInput}>Short description</p>
                    <input className={styleSectionBasic.inputText} type={"text"}/>
                    <p className={styleSectionBasic.headerInput}>About project</p>
                    <div className={styleSectionBasic.redactorEditor}>
                        <div className={styleSectionBasic.redactorToolbar}>
                            <button type="button"
                                    onClick={textEditor.bold}
                                    className={styleSectionBasic.bold}
                                    title="Bold Text">
                            </button>
                            <button type="button"
                                    onClick="f2()"
                                    className={styleSectionBasic.italic}
                                    title="Italic Text">
                            </button>
                            <button type="button"
                                    onClick="f3()"
                                    className={styleSectionBasic.leftAlign}
                                    title="Left Align">
                            </button>
                            <button type="button"
                                    onClick="f4()"
                                    className={styleSectionBasic.centreAlign}
                                    title="Center Align">
                            </button>
                            <button type="button"
                                    onClick="f5()"
                                    className={styleSectionBasic.rightAlign}
                                    title="Right Align">
                            </button>
                            <div className={styleSectionBasic.buttonImgArea}>
                            <button type="button"
                                    onClick="f7()"
                                    className={styleSectionBasic.img}
                                    title="Add image">
                                <input className={styleSectionBasic.buttonImgFile} type="file"/>
                            </button></div>
                            <button type="button"
                                    onClick="f7()"
                                    className={styleSectionBasic.clear}
                                    title="Delete all">
                            </button>

                        </div>
                        <div contentEditable="true" id="textarea" className={styleSectionBasic.textArea} onClick={textEditor.focus}> </div>
                    </div>
                    <p className={styleSectionBasic.headerInput}>Select a category</p>
                    <select className={styleSectionBasic.select} name="category" id="category">
                        {categoryOptions}
                        {/*<option className={styleSectionBasic.option}></option>*/}
                    </select>
                    <p className={styleSectionBasic.headerInput}>Expected amount</p>
                    <input className={styleSectionBasic.inputNumber} type={"number"}/>
                    <span> $</span>
                </div>
                <div className={styleSectionBasic.bottomBasicWrapper}>
                    <NavLink to="/createProject/Rewards" className={styleSectionBasic.buttonNext}>Next ></NavLink>
                </div>
            </div>
        )
    }


}

export default SectionBasic