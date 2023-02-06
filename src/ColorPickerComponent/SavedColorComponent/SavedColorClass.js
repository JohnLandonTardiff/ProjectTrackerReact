export var savedColors = [];

export class SavedColor {
    constructor(name, id, color) {
        this.name = name;
        this.id = id;
        this.color = color;
    }
}

export function readColors() {
    const colors = JSON.parse(window.localStorage.getItem("colors"));
    savedColors = colors ? colors.map((color, id) => {
        if(color && id !== 0)
            return new SavedColor(color.name,  id, color.color);
        else
            return new SavedColor("None", 0, "");
    }) : [new SavedColor("None", 0, "")];
}

export function writeColors(colorList){
    const jsonString = JSON.stringify(colorList, null, 2);
    window.localStorage.setItem("colors", jsonString);
}