import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { projectsList } from "../ProjectsPage/ProjectClass";
import CreateGoalModal from "./Modals/CreateGoalModal/CreateGoalModal";
import EditGoalModal from "./Modals/EditGoalModal/EditGoalModal";
import DeleteGoalModal from "./Modals/DeleteGoalModal/DeleteGoalModal";
import SavedColorsComponent from "../ColorPickerComponent/SavedColorComponent/SavedColorsComponent";
import reactcss from 'reactcss';
import SortDropdown from "../SortDropdown/SortDropdown";
import { ReadData } from "../PageLoad";
import { reloadGoals } from "../ReloadEvents";

import './GoalsPageStyles.css';
import { sortArray } from "../SortDropdown/SortDropdownScripting";

export function GoalsPage(){

    ReadData();

    let {id} = useParams();

    const project = projectsList[id];

    var goalArray = sortArray(project.goals.slice(), false);
    console.log(goalArray);

    const [createOpen, changeCreateOpen] = useState(false);
    const [editOpen, changeEditOpen] = useState(false);
    const [deleteOpen, changeDeleteOpen] = useState(false);
    const [selectedGoal, changeSelectedGoal] = useState();
    const [reloadState, reload] = useState(0);

    useEffect(() => {
        document.addEventListener("reloadGoals", reloadEffect);

        return () => {
            document.removeEventListener("reloadGoals", reloadEffect);
        }
    });

    var reloadEffect = () => {
        reload(reloadState + 1);
    }

    return(
        <div className="PageContainer" id="goals-page">
            <div className="LeftContainer">
            <Link to={"/"}>
                <button id="back-button">Back</button>
            </Link>
                <h1>{project.name + " Goals"}</h1>
                <div className="SortDropdownContainer">
                    <SortDropdown isProject={false} reloadPage={reloadGoals} />
                </div>
                <GoalList goals={goalArray} openCreate={changeCreateOpen} openDelete={changeDeleteOpen} openEdit={changeEditOpen} changeSelectedGoal={changeSelectedGoal}/>
            </div>

            <div className="RightContainer">
                <SavedColorsComponent colors={project.goalColors} isProject={false} projectId={id}/>
            </div>
            {createOpen && <CreateGoalModal projectId={id} colorList={project.goalColors} modalOpen={changeCreateOpen}/>}
            {editOpen && <EditGoalModal projectId={id} goal={project.goals[selectedGoal]} colorList={project.goalColors} modalOpen={changeEditOpen} />}
            {deleteOpen && <DeleteGoalModal projectId={id} goal={project.goals[selectedGoal]} modalOpen={changeDeleteOpen}/>}
        </div>
    );
}

function GoalList(props) {
    var goalListItems = props.goals ? props.goals.map((goal, id) => {
        return(
            <li key={id} className="DataListItem" id="goal-list-item">
                <GoalListItem id={goal.id} name={goal.name} status={goal.status} color={goal.color} openDelete={props.openDelete} openEdit={props.openEdit} changeSelectedGoal={props.changeSelectedGoal}/>
            </li>
        );
    }) : [];

    return(
        <ul className="DataList" id="goal-list">
            {goalListItems}
            <li>
                <button className="AddData" id="add-goal" onClick={() => props.openCreate(true)}>+ Add Goal</button>
            </li>
        </ul>
    );
}

function GoalListItem(props) {
    const style = reactcss({
        'default': {
            goalColor: {
                background: props.color.color
            }
        }
    })

    return(
        <>
            <button className="GoalButton" onClick={() => {props.changeSelectedGoal(props.id); props.openEdit(true);}}>
                {props.name + " : " + props.status}
                {(props.color.id !== 0) && <div className="DataItemColor" id="goal-color" style={style.goalColor}/>}
            </button>
            <button className="DataOption" onClick={() => {props.changeSelectedGoal(props.id); props.openDelete(true);}}>X</button>
        </>
    );
}