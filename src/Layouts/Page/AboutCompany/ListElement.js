import Clickable from '../../../Components/Clickable';
import EditIcon from '../../../Icons/EditIcon';
import RemoveIcon from '../../../Icons/RemoveIcon';

function ListElement(props) {
    return (
        <div class='d-flex flex-row align-items-center align-self-stretch gap-1'>
            <div class='flex-grow-1 p-2 text-input'>{props.children}</div>
            <div class='ms-1 p-2 temp-button'> 
                <Clickable>
                    Ред.
                </Clickable>   
            </div>
            <div class='ms-1 p-2 temp-button'> 
                <Clickable>
                    Удл.
                </Clickable>   
            </div>
        </div>
    );
}

export default ListElement;