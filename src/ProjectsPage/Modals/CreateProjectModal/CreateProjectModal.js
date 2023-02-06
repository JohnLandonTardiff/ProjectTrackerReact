import ColorDropdown from '../../../ColorPickerComponent/ColorDropdown/ColorDropdown';
import { addProject } from '../../ProjectsPageScripting';
import { savedColors } from '../../../ColorPickerComponent/SavedColorComponent/SavedColorClass';

function CreateProjectModal(props) {
    return(
        <div className="CreateProjectModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>Create New Project</h1>
                    <h2>Name:</h2>
                    <input id="new-project-name-input" type="text" defaultValue="New Project" />
                    <h2>Color:</h2>
                    <ColorDropdown id="new-project-color-dropdown" colorList={savedColors} defaultValue={0} />
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {addProject(); props.modalOpen(false);}}>Create</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectModal;