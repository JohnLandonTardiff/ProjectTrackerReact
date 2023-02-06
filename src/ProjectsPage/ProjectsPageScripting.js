import { Project, projectsList, writeProjects } from './ProjectClass';
import { savedColors } from '../ColorPickerComponent/SavedColorComponent/SavedColorClass';
import { reloadProjects } from '../ReloadEvents';

export function addProject() {
    const projectName = document.getElementById("new-project-name-input").value;
    const projectColor = document.getElementById("new-project-color-dropdown").value;
    const projectDateTime = Date().toLocaleUpperCase();
    projectsList.push(new Project(projectName, projectsList.length, projectDateTime, [], savedColors[projectColor], []));
    writeProjects();
    reloadProjects();
}

export function deleteProject(id) {
    projectsList.splice(id, 1)
    writeProjects();
    reloadProjects();
}

export function saveProject(projectId){
    const newName = document.getElementById("edit-project-name-input").value;
    const newColor = document.getElementById("edit-project-color-dropdown").value;
    projectsList[projectId].name = newName;
    projectsList[projectId].color = savedColors[newColor];
    writeProjects();
    reloadProjects();
}