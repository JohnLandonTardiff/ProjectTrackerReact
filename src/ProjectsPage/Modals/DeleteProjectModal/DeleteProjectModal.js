import { deleteProject } from '../../ProjectsPageScripting';
import { projectsList } from '../../ProjectClass';

function DeleteProjectModal(props) {
    return(
        <div className="DeleteProjectModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>Are You Sure You Want To Delete Project: </h1>
                    <h1>{projectsList[props.projectId].name + "?"}</h1>
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {deleteProject(props.projectId); props.modalOpen(false);}}>Confirm</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProjectModal;