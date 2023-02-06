import { CustomPicker } from 'react-color';
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common';
import reactCSS from 'reactcss';
import * as color from 'react-color/lib/helpers';

import './ColorPickerStyles.css';

function ColorPicker(props) {

    var handleChange = (data, e) => {
        if(data.hex) {
            color.isValidHex(data.hex) && props.onChange({
                hex: data.hex,
                source: 'hex'
            }, e);
        }
        else if(data.r || data.g || data.b) {
            props.onChange({
                r: data.r || props.rgb.r,
                g: data.g || props.rgb.g,
                b: data.b || props.rgb.b,
                a: '1',
                source: 'rgb'
            }, e);
        }
    };

    return(
        <div className="ColorPicker">
            <div className="NameInputContainer">
                <input id="color-name-input" type="text" defaultValue={props.name}/>
            </div>
            <div className="ColorSelectors">
                <SaturationBlock hsl={props.hsl} hsv={props.hsv} onChange={props.onChange}/>
                <div className="ColorFields">
                    <HueSlider hsl={props.hsl} onChange={props.onChange} />
                    <ColorInput id="hex" label="hex" value={props.hex} onChange={handleChange} />
                    <ColorInput label="r" value={props.rgb.r} onChange={handleChange} />
                    <ColorInput label="g" value={props.rgb.g} onChange={handleChange} />
                    <ColorInput label="b" value={props.rgb.b} onChange={handleChange} />
                    <ColorPreview hex={props.hex}/>
                </div>
            </div>
        </div>
    );
}

function SaturationBlock({hsl, hsv, onChange}) {
    return(
        <div className="SaturationBlock">
            <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
        </div>
    );
}

function HueSlider({hsl, onChange}) {
    return(
        <div className="HueSlider">
            <Hue hsl={hsl} onChange={onChange} />
        </div>
    );
}

function ColorInput({id, label, value, onChange}) {
    return(
        <div className="ColorInput" id={id}>
            <EditableInput label={label} value={value} onChange={onChange} />
        </div>
    );
}

function ColorPreview({ hex }) {
    const style = reactCSS({
        'default': {
            color: {
                background: hex
            }
        }
    });

    return(
        <div className="ColorPreview" style={style.color} />
    );
}


export default CustomPicker(ColorPicker);