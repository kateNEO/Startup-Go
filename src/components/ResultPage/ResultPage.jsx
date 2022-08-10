import React from "react";
import styleResultPage from "./ResultPage.module.css"
import {useParams} from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";
import Category from "../Categories/Category";
//import PrintInConsole from "../../services/campaigns_indexes/try";
//import CampaignsIndexator from "../../services/campaigns_indexes/campaigns-indexer"


class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectItemData: props.projectItemData,
            categoryData: props.categoryData
        }
    }

    render() {
        window.scrollTo(0,0);
        let categoryElements = this.state.categoryData.map(category => <Category key={category.id}
                                                                                 name={category.name}/>)
        return (
            <div className={styleResultPage.allPrjContent}>
                <div className={styleResultPage.navCategories}>
                    {categoryElements}
                </div>
                    <FilterProject projectItemData={this.state.projectItemData}/>
            </div>
        )
    }
}

const FilterProject = (props) => {
    let projectOfCategory = [];
    let {name} = useParams();
    let projectOfCategoryElement;
    console.log(name);
    // PrintInConsole();
    // CampaignsIndexator.getCampaignsIds(0,3, 1,true);

    if (name === "all") {
        mappingArr(props.projectItemData)
    } else {

        for (let i = 0; i < props.projectItemData.length; i++) {
            if (props.projectItemData[i].category === name) {
                projectOfCategory.push(props.projectItemData[i]);

            }
        }

        mappingArr(projectOfCategory)
    }

    function mappingArr(projectArr) {
        projectOfCategoryElement = projectArr.map(projectOfCategoryElement => <ProjectItem
            key={projectOfCategoryElement.id}
            id={projectOfCategoryElement.id}
            name={projectOfCategoryElement.name}
            img={projectOfCategoryElement.img}
            currentAmount={projectOfCategoryElement.received}
            expectedAmount ={projectOfCategoryElement.goal}
            category={projectOfCategoryElement.category} />)
    }

    return (
        <div className={styleResultPage.allProjectsArea}>
            {projectOfCategoryElement}
        </div>
    )
}
export default ResultPage
