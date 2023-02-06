import { projectsList } from './ProjectClass';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteProjectModal from './Modals/DeleteProjectModal/DeleteProjectModal';
import CreateProjectModal from './Modals/CreateProjectModal/CreateProjectModal';
import EditProjectModal from './Modals/EditProjectModal/EditProjectModal';
import { savedColors } from '../ColorPickerComponent/SavedColorComponent/SavedColorClass';
import SavedColorsComponent from '../ColorPickerComponent/SavedColorComponent/SavedColorsComponent';
import reactcss from 'reactcss';
import SortDropdown from '../SortDropdown/SortDropdown';
import { ReadData } from '../PageLoad';
import { reloadProjects } from '../ReloadEvents';
import { sortArray } from '../SortDropdown/SortDropdownScripting';

import './ProjectsPageStyles.css';

export function ProjectsPage() {

    ReadData();

    var projectArray = sortArray(projectsList.slice(), true);

    const [deleteOpen, changeDeleteOpen] = useState(false);
    const [editOpen, changeEditOpen] = useState(false);
    const [createOpen, changeCreateOpen] = useState(false);
    const [selectedProject, changeSelectedProject] = useState();

    const [reloadState, reload] = useState(0);

    useEffect(() => {
        document.addEventListener("reloadProjects", reloadEffect);

        return () => {
            document.removeEventListener("reloadProjects", reloadEffect);
        }
    });

    var reloadEffect = () => {
        reload(reloadState + 1);
    }

    return(
        <div className="PageContainer" id='projects-page'>
            <div className="LeftContainer">
                <h1>Projects</h1>
                <div className="SortDropdownContainer">
                    <SortDropdown isProject={true} reloadPage={reloadProjects} />
                </div>
                <ProjectList projectsArray={projectArray} changeSelectedProject={changeSelectedProject} openDelete={changeDeleteOpen} openCreate={changeCreateOpen} openEdit={changeEditOpen}/>
            </div>
            
            <div className="RightContainer">
                <SavedColorsComponent colors={savedColors} isProject={true} reload={reload}/>
            </div>

            {deleteOpen && <DeleteProjectModal projectId={selectedProject} modalOpen={changeDeleteOpen}/>}
            {createOpen && <CreateProjectModal modalOpen={changeCreateOpen}/>}
            {editOpen && <EditProjectModal projectId={selectedProject} modalOpen={changeEditOpen}/>}
        </div>
    );
}

function ProjectList(props) {
    var projectListItems = props.projectsArray ? props.projectsArray.map((project, id) => {
        return(
            <li key={id} className="DataListItem" id="project-list-item">
                <ProjectListItem name={project.name} id={project.id} colorId={project.color.id} changeSelectedProject={props.changeSelectedProject} openDelete={props.openDelete} openEdit={props.openEdit}/>
            </li>
        );
    }) : [];

    return(
        <ul className="DataList" id="project-list">
            {projectListItems}
            <li>
                <button className="AddData" id="add-project" onClick={() => props.openCreate(true)}>+ Add Project</button>
            </li>
        </ul>
    );
}

function ProjectListItem(props) {
    const style = reactcss({
        'default': {
            projectColor: {
                background: savedColors[props.colorId].color,
            }
        }
    });

    return(
        <>
            <Link to={"/project/" + props.id}>
                    <button className="ProjectButton">
                        {props.name}
                        {props.colorId !== 0 && <div className="DataItemColor" id="project-color" style={style.projectColor}/>}
                    </button>
            </Link>
            <button className="DataOption" onClick={() => {props.changeSelectedProject(props.id); props.openEdit(true);}}>...</button>
            <button className="DataOption" onClick={() => {props.changeSelectedProject(props.id); props.openDelete(true);}}>X</button>
        </>
    );
}