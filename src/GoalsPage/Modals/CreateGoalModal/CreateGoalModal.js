import ColorDropdown from '../../../ColorPickerComponent/ColorDropdown/ColorDropdown';
import { addGoal } from '../../GoalsPageScripting';
import GoalStatusDropdown from '../../GoalStatusDropdown/GoalStatusDropdown';

function CreateGoalModal(props) {
    return(
        <div className="CreateGoalModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>Create New Goal</h1>
                    <h2>Name:</h2>
                    <input id="new-goal-name-input" type="text" defaultValue="New Goal" />
                    <h2>Status:</h2>
                    <GoalStatusDropdown id="new-goal-status-dropdown" />
                    <h2>Color:</h2>
                    <ColorDropdown id="new-goal-color-dropdown" colorList={props.colorList} colorId={0} />
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {addGoal(props.projectId); props.modalOpen(false);}}>Create</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateGoalModal;