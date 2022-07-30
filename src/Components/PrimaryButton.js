import Clickable from "./Clickable";

function PrimaryButton(props) {
    return (
        <Clickable>
        <div class='primary-button p-2 headline white'>
            {props.children}
        </div>
        </Clickable>
        
    );
}

export default PrimaryButton;