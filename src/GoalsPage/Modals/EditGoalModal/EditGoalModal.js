import { saveGoal } from '../../GoalsPageScripting';
import GoalStatusDropdown from '../../GoalStatusDropdown/GoalStatusDropdown';
import ColorDropdown from '../../../ColorPickerComponent/ColorDropdown/ColorDropdown';

function EditGoalModal(props) {
    return(
        <div className="EditGoalModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>{props.goal.name}</h1>
                    <h2>Name:</h2>
                    <input id="edit-goal-name-input" type="text" defaultValue={props.goal.name} />
                    <h2>Status:</h2>
                    <GoalStatusDropdown id="edit-goal-status-dropdown" defaultValue={props.goal.status}/>
                    <h2>Color:</h2>
                    <ColorDropdown id="edit-goal-color-dropdown" colorList={props.colorList} colorId={props.goal.color.id} />
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {saveGoal(props.projectId, props.goal.id); props.modalOpen(false);}}>Save</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditGoalModal;