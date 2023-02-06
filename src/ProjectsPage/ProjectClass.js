import { SavedColor, savedColors } from '../ColorPickerComponent/SavedColorComponent/SavedColorClass';
import { readGoals } from '../GoalsPage/GoalClass';

export var projectsList = [];

export class Project {
    constructor(name, id, dateTime, goals, color, goalColors) {
        this.name = name;
        this.id = id;
        this.dateTime = dateTime;
        this.goals = goals;
        this.color = color;
        this.goalColors = goalColors;
    }
}

export function readProjects() {
        const projectJson = JSON.parse(window.localStorage.getItem('projects'));
        var projects = projectJson ? 
            projectJson.map((project, id) => {
                var colorId = project.color && (savedColors.find(color => color.name === project.color.name)) ? savedColors.find(color => color.name === project.color.name).id : 0;
                var goalColors = project.goalColors.length !== 0 ? project.goalColors.map((color, id) => {
                    if(color && id !== 0)
                        return new SavedColor(color.name, id, color.color);
                    else 
                        return new SavedColor("None", 0, "");
                }) : [new SavedColor("None", 0, "")];
                var goals = readGoals(project, goalColors);
                console.log(goals);
                var dateTime = project.dateTime;
                return (new Project(project.name, id, dateTime, goals, savedColors[colorId], goalColors));
            }) :
            [];
        
        projectsList = projects;
    }

    export function writeProjects() {
        const jsonString = JSON.stringify(projectsList, null, 2);
        window.localStorage.setItem("projects", jsonString);
    }