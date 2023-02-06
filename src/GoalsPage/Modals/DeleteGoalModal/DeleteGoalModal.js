import { deleteGoal } from '../../GoalsPageScripting';

function DeleteGoalModal(props) {
    return(
        <div className="DeleteGoalModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>Are You Sure You Want To Delete Goal: </h1>
                    <h1>{props.goal.name + "?"}</h1>
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {deleteGoal(props.projectId, props.goal.id); props.modalOpen(false);}}>Confirm</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteGoalModal;