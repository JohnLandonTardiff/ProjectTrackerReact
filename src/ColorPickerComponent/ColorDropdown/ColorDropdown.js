import './ColorDropdownStyles.css';

function ColorDropdown(props) {

    return(
        <select className="ColorDropdown" id={props.id} defaultValue={props.colorId}>
            {
                props.colorList && props.colorList.map((color, id) => {
                    return(
                        <option key={id} value={id}>{color.name}</option>
                    );
                })
            }
        </select>
    );
}

export default ColorDropdown;