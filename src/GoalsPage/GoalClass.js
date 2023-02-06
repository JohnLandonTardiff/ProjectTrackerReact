export class Goal {
    constructor(name, id, dateTime, status, color){
        this.name = name;
        this.id = id;
        this.dateTime = dateTime;
        this.status = status;
        this.color = color;
    }
}

export function readGoals(project, goalColors){
    return project.goals ? project.goals.map((goal, id) => {
        var colorId = goal.color && (goalColors.find(color => color.name === goal.color.name)) ? goalColors.find(color => color.name === goal.color.name).id : 0;
        var dateTime = goal.dateTime;
        return (new Goal(goal.name, id, dateTime, goal.status, goalColors[colorId]));
    }) : [];
}