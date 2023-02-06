import ColorDropdown from '../../../ColorPickerComponent/ColorDropdown/ColorDropdown';
import { savedColors } from '../../../ColorPickerComponent/SavedColorComponent/SavedColorClass';
import { projectsList } from '../../ProjectClass';
import { saveProject } from '../../ProjectsPageScripting';

function EditProjectModal(props) {
    const project = projectsList[props.projectId];

    return(
        <div className="EditProjectModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>{project.name}</h1>
                    <h2>Name:</h2>
                    <input id="edit-project-name-input" type="text" defaultValue={project.name} />
                    <h2>Color:</h2>
                    <ColorDropdown id="edit-project-color-dropdown" colorList={savedColors} colorId={project.color.id} />
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {saveProject(props.projectId); props.modalOpen(false);}}>Save</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProjectModal;