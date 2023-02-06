export function sortArray(array, isProject) {
    const sortValue = isProject ? readSortProjectValue() : readSortGoalValue();
    array.join();
    switch(sortValue) {
        case "0": {
            return array.sort(sortAlphDesc);
        }
        case "1": {
            return array.sort(sortAplhAsc);
        }
        case "2": {
            return array.sort(sortDateTimeAsc);
        }
        case "3": {
            return array.sort(sortDateTimeDesc);
        }
        case "4": {
            return array.sort(sortColorAsc);
        }
        case "5": {
            return array.sort(sortColorDesc);
        }
        case "6": {
            return array.sort(sortNotStart);
        }
        case "7": {
            return array.sort(sortInProg);
        }
        case "8": {
            return array.sort(sortComplete);
        }
        default: {
            return array;
        }
    }
}

export function saveSortProjectValue(){
    const sortValue = document.getElementById("sort-dropdown").value;
    window.localStorage.setItem("sortProject", sortValue);
}

export function readSortProjectValue() {
    return window.localStorage.getItem("sortProject");
}

export function saveSortGoalValue(){
    const sortValue = document.getElementById("sort-dropdown").value;
    window.localStorage.setItem("sortGoal", sortValue);
}

export function readSortGoalValue() {
    return window.localStorage.getItem("sortGoal");
}

function sortAplhAsc(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(aName > bName) return -1;
    if(aName < bName) return 1;
    return 0;
}

function sortAlphDesc(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(aName < bName) return -1;
    if(aName > bName) return 1;
    return 0;
}

function sortDateTimeAsc(a, b) {
    var aDate = new Date(a.dateTime);
    var bDate = new Date(b.dateTime);
    if(aDate.getTime() < bDate.getTime()) return 1;
    if(aDate.getTime() > bDate.getTime()) return -1;
    return 0;
}

function sortDateTimeDesc(a, b) {
    var aDate = new Date(a.dateTime);
    var bDate = new Date(b.dateTime);
    if(aDate.getTime() > bDate.getTime()) return 1;
    if(aDate.getTime() < bDate.getTime()) return -1;
    return 0;
}

function sortColorAsc(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(a.color.id > b.color.id) return 1;
    if(a.color.id < b.color.id) return -1;
    if(aName > bName) return 1;
    if(aName < bName) return -1;
    return 0;
}

function sortColorDesc(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(a.color.id < b.color.id) return 1;
    if(a.color.id > b.color.id) return -1;
    if(aName > bName) return 1;
    if(aName < bName) return -1;
    return 0; 
}

function sortNotStart(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(a.status === "Not Yet Started" && b.status !== "Not Yet Started") return -1;
    if(a.status !== "Not Yet Started" && b.status === "Not Yet Started") return 1;
    if(a.status === "In Progress" && b.status !== "InProgress") return -1;
    if(a.status !== "In Progress" && b.status === "InProgress") return 1;
    if(aName > bName) return 1;
    if(aName < bName) return -1;
}

function sortInProg(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(a.status === "In Progress" && b.status !== "In Progress") return -1;
    if(a.status !== "In Progress" && b.status === "In Progress") return 1;
    if(a.status === "Completed" && b.status !== "Completed") return -1;
    if(a.status !== "Completed" && b.status === "Completed") return 1;
    if(aName > bName) return 1;
    if(aName < bName) return -1;
}

function sortComplete(a, b) {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if(a.status === "Completed" && b.status !== "Completed") return -1;
    if(a.status !== "Completed" && b.status === "Completed") return 1;
    if(a.status === "Not Yet Started" && b.status !== "Not Yet Started") return -1;
    if(a.status !== "Not Yet Started" && b.status === "Not Yet Started") return 1;
    if(aName > bName) return 1;
    if(aName < bName) return -1;
}