import React from "react";
import styleResultPage from "./ResultPage.module.css"
import {useParams} from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";


class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectItemData: props.projectItemData
        }
    }
    render() {

        return (
            <div>
                <FindParam projectItemData={this.state.projectItemData}/>
            </div>
        )
    }
}

const FindParam = (props) => {
    let projectOfCategory = [];
    let {name} = useParams();
    for (let i = 0; i < props.projectItemData.length; i++) {
        if (props.projectItemData[i].category === name) {
            projectOfCategory.push(props.projectItemData[i]);
        }
    }
    let projectOfCategoryElement = projectOfCategory.map(projectOfCategoryElement => <ProjectItem
                                                                                                    key={projectOfCategoryElement.id}
                                                                                                    name={projectOfCategoryElement.name}/>)
    return (
        <div>
            {projectOfCategoryElement}
        </div>
    )
}
export default ResultPage
