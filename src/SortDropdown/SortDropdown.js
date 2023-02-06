import { readSortGoalValue, readSortProjectValue, saveSortGoalValue, saveSortProjectValue} from "./SortDropdownScripting";

import './SortDropdownStyles.css';

const sortOptions = [
    <option key="0" value="0">Alphabetical: Asc</option>,
    <option key="1" value="1">Alphabetical: Desc</option>,
    <option key="2" value="2">Newest</option>,
    <option key="3" value="3">Oldest</option>,
    <option key="4" value="4">Color: Asc</option>,
    <option key="5" value="5">Color: Desc</option>
];

const goalOptions = [
    <option key="6" value="6">Status: Not Yet Started</option>,
    <option key="7" value="7">Status: In Progress</option>,
    <option key="8" value="8">Status: Completed</option>,
];

function SortDropdown(props) {

    var value = props.isProject ? readSortProjectValue() : readSortGoalValue();

    return(
        <div className="SortDropdown">
            <select id="sort-dropdown" defaultValue={value ? value : "3"}>
                {sortOptions}
                {!props.isProject && goalOptions}
            </select>
            <button onClick={() => {props.isProject ? saveSortProjectValue() : saveSortGoalValue(); props.reloadPage()}}>Sort</button>
        </div>
    );
}

export default SortDropdown;