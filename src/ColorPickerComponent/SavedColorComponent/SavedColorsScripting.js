import { projectsList, writeProjects } from "../../ProjectsPage/ProjectClass";
import { SavedColor, writeColors } from "../SavedColorComponent/SavedColorClass";
import { reloadGoals, reloadProjects } from "../../ReloadEvents";

export function addColor(colorList, color, isProject, projectId){
    const colorName = document.getElementById("color-name-input").value;
    if(colorList.find(color => color.name === colorName)){
        alert("There is already a color with this name");
        return;
    }
    const newColor = color ? color : "#000000";
    colorList.push(new SavedColor(colorName, colorList.length, newColor));

    if(isProject) {
        writeColors(colorList);
        reloadProjects();
    }
    else{
        projectsList[projectId].goalColors = colorList;
        writeProjects();
        reloadGoals();
    }
}

export function deleteColor(colorList, id, isProject, projectId) {
    colorList.splice(id, 1);
    
    if(isProject) {
        writeColors(colorList);
        reloadProjects();
    }
    else{
        projectsList[projectId].goalColors = colorList;
        writeProjects();
        reloadGoals();
    }
}

export function saveColor(colorList, colorObject, color, isProject, projectId) {
    colorObject.color = color;
    colorObject.name = document.getElementById("color-name-input").value;

    if(isProject) {
        writeColors(colorList);
        reloadProjects();
    }
    else{
        projectsList[projectId].goalColors = colorList;
        writeProjects();
        reloadGoals();
    }
}