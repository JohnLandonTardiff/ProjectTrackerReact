import { readProjects } from './ProjectsPage/ProjectClass';
import { readColors } from './ColorPickerComponent/SavedColorComponent/SavedColorClass';

export function ReadData() {
    //localStorage.clear();
    readColors();
    readProjects();
}