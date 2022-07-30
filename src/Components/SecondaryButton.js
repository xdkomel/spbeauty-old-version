import Clickable from "./Clickable";

function SecondaryButton(props) {
    return (
        <Clickable >
        <div class='secondary-button p-2 headline white'>
            {props.children}
        </div>
        </Clickable>
        
    );
}

export default SecondaryButton;