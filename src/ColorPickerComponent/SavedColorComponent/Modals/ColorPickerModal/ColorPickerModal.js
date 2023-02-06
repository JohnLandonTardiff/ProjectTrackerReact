import ColorPicker from "../../../ColorPicker/ColorPicker";
import { useState } from "react";
import { addColor, saveColor } from "../../SavedColorsScripting";

import './ColorPickerModalStyles.css';

function ColorPickerModal(props) {
    const [color, changeColor] = useState(props.colorList[props.colorId] ? props.colorList[props.colorId].color : "");

    var handleChange = (color) => {
        changeColor(color.hex);
    }

    var name = props.colorList[props.colorId] ? props.colorList[props.colorId].name : "New Color";
    
    return(
        <div className="ColorPickerModal">
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>{name}</h1>
                    <ColorPicker name={name} color={color} onChange={handleChange}/>
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {props.colorList[props.colorId] ? saveColor(props.colorList, props.colorList[props.colorId], color, props.isProject, props.projectId) : addColor(props.colorList, color, props.isProject, props.projectId); props.modalOpen(false);}}>Save</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPickerModal;