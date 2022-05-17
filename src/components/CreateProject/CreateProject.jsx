import React from "react";
import styleCreateProject from "./CreateProject.module.css"
import {Tab} from "semantic-ui-react";

const panes = [
    {menuItem: 'Basic', pane: ''},
    {menuItem: 'Information', pane: ''},
    {menuItem: 'Rewards', pane: ''},
    {menuItem: 'About Me', pane: ''},
    {menuItem: 'Bank account', pane: ''},
    {menuItem: 'Verification', pane: ''}
]
const CreateProject = () => {
    return (
        <div className={styleCreateProject.createProjectWrapper}>
            <div className={styleCreateProject.menuPC}>
                <Tab panes={panes} renderActiveOnly={false}/>
            </div>

        </div>
    )
}
export default CreateProject