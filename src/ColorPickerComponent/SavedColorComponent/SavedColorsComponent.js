import { useState } from 'react';
import reactCSS from 'reactcss';
import ColorPickerModal from './Modals/ColorPickerModal/ColorPickerModal';
import DeleteColorModal from './Modals/DeleteColorModal/DeleteColorModal';

import './SavedColorStyles.css';

function SavedColorsComponent(props) {
    const [newColorOpen, changeNewColorOpen] = useState(false);
    const [editColorOpen, changeEditColorOpen] = useState(false);
    const [deleteColorOpen, changeDeleteColorOpen] = useState(false);
    const [selectedColor, changeSelectedColor] = useState();

    return(
        <div className="SavedColorsComponent">
            <h2>Saved Colors</h2>
            <SavedColorsList colors={props.colors} openNewColor={changeNewColorOpen} openEdit={changeEditColorOpen} openDelete={changeDeleteColorOpen} changeSelectedColor={changeSelectedColor}/>
            {newColorOpen && <ColorPickerModal colorList={props.colors} colorId={null} modalOpen={changeNewColorOpen} isProject={props.isProject} projectId={props.projectId}/>}
            {editColorOpen && <ColorPickerModal colorList={props.colors} colorId={selectedColor} modalOpen={changeEditColorOpen} isProject={props.isProject} projectId={props.projectId}/>}
            {deleteColorOpen && <DeleteColorModal colorList={props.colors} colorId={selectedColor} modalOpen={changeDeleteColorOpen} isProject={props.isProject} projectId={props.projectId}/>}
        </div>
    )
}

function SavedColorsList(props) {
    var savedColorsListItems = props.colors.map((color, id) => {
        if(id !== 0) 
            return(
                <li key={id} className="SavedColorsListItem">
                    <SavedColorsListItem id={id} color={color} openEdit={props.openEdit} openDelete={props.openDelete} changeSelectedColor={props.changeSelectedColor}/>
                </li>
            );
            else return null;
    });

    return(
        <ul className="SavedColorsList">
            {savedColorsListItems}
            <li>
                <button id="add-saved-color" onClick={() => props.openNewColor(true)}>+ Add Color</button>
            </li>
        </ul>
    )
}

function SavedColorsListItem(props) {
    const style = reactCSS({
        'default': {
            buttonColor: {
                background: props.color.color
            }
        }
    });

    return(
        <>
            <button id="saved-color" onClick={() => {props.changeSelectedColor(props.id); props.openEdit(true);}}>
                <div id="saved-color-color" style={style.buttonColor} />
                {props.color.name}
            </button>
            <button id="delete-saved-color" onClick={() => {props.changeSelectedColor(props.id); props.openDelete(true);}}>X</button>
        </>
    );
}

export default SavedColorsComponent;