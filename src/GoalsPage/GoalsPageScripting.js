import { Goal } from '../GoalsPage/GoalClass';
import { projectsList, writeProjects } from '../ProjectsPage/ProjectClass';

export function addGoal(projectId){
    const goalName = document.getElementById("new-goal-name-input").value;
    const dateTime = Date().toLocaleUpperCase();
    const goalStatus = document.getElementById("new-goal-status-dropdown").value;
    const goalColor = document.getElementById("new-goal-color-dropdown").value;
    projectsList[projectId].goals.push(new Goal(goalName, 0, dateTime, goalStatus, projectsList[projectId].goalColors[goalColor]));
    writeProjects();
}

export function deleteGoal(projectId, id) {
    projectsList[projectId].goals.splice(id, 1);
    writeProjects();
}

export function saveGoal(projectId, goalId) {
    var goal = projectsList[projectId].goals[goalId];
    const goalName = document.getElementById("edit-goal-name-input").value;
    const goalStatus = document.getElementById("edit-goal-status-dropdown").value;
    const goalColor = document.getElementById("edit-goal-color-dropdown").value;
    goal.name = goalName;
    goal.status = goalStatus;
    goal.color = projectsList[projectId].goalColors[goalColor];
    writeProjects();
}