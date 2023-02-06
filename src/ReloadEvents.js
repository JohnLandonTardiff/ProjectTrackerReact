
export function reloadProjects(){
    const event = new CustomEvent("reloadProjects");
    document.dispatchEvent(event);
}

export function reloadGoals(){
    const event = new CustomEvent("reloadGoals");
    document.dispatchEvent(event);
}