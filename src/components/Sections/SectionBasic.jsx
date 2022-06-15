import React from "react";
import styleSectionBasic from "./Sections.module.css"
import CreateProject from "../CreateProject/CreateProject";
import {NavLink} from "react-router-dom";
let d = document;

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
        this.createImg();
    }

   createImg() {
        return(
            <div className={styleSectionBasic.preview}>
                <img id="img" className={styleSectionBasic.imgPreview} src={this.state.imgURL}/>
            </div>
        )
    }

    render() {

        let categoryOptions = this.state.categoryData.map(categoryOptions => <option className={styleSectionBasic.options}
                                                                                     key={categoryOptions.id}
                                                                                     value={categoryOptions.name}>{categoryOptions.name}</option>)
        return (
            <div className={styleSectionBasic.sectionBasicWrapper}>
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
                    <p>Select a category</p>
                    <select className={styleSectionBasic.select} name="category" id="category">
                        {categoryOptions}
                        <option className={styleSectionBasic.option}></option>
                    </select>
                    <p className={styleSectionBasic.headerInput}>City</p>
                    <input className={styleSectionBasic.inputText} type={"text"}/>
                    <p className={styleSectionBasic.headerInput}>Project duration</p>
                    <input className={styleSectionBasic.inputNumber} type={"number"} min={"30"} max={"60"}/>
                    <span> days</span>
                    <p className={styleSectionBasic.headerInput}>Required amount</p>
                    <input className={styleSectionBasic.inputNumber} type={"number"}/>
                    <span> $</span>
                </div>
                <div className={styleSectionBasic.bottomBasicWrapper}>
                    <NavLink to="/createProject/Information" className={styleSectionBasic.buttonNext}>Next ></NavLink>
                </div>
            </div>
        )
    }


}

export default SectionBasic