import { deleteColor } from '../../SavedColorsScripting'; 

function DeleteColorModal(props) {
    console.log(props.colorId);
    return(
        <div className="DeleteColorModal" >
            <div className="ModalBackground">
                <div className="ModalContainer">
                    <h1>Are You Sure You Want To Delete Color:</h1>
                    <h1>{props.colorList[props.colorId].name + "?"}</h1>
                    <div className="Buttons">
                        <button className="Button1" onClick={() => {deleteColor(props.colorList, props.colorId, props.isProject, props.projectId); props.modalOpen(false);}}>Confirm</button>
                        <button className="Button2" onClick={() => props.modalOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteColorModal;