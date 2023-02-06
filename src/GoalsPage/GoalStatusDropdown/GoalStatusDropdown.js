import './GoalStatusDropdownStyles.css';

export function GoalStatusDropdown(props) {

    const GoalStatuses = {
        NotYetStarted: "Not Yet Started",
        InProgress: "In Progress",
        Completed: "Completed"
    }

    return(
        <select className="GoalStatusDropdown" id={props.id} defaultValue={props.defaultValue ? props.defaultValue : GoalStatuses.NotYetStarted} >
            <option>{GoalStatuses.NotYetStarted}</option>
            <option>{GoalStatuses.InProgress}</option>
            <option>{GoalStatuses.Completed}</option>
        </select>
    );
}

export default GoalStatusDropdown;