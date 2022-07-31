import Clickable from "./Clickable";
function IconedButton(props) {
    return (
        <Clickable>
            <div className="d-flex flex-row justify-content-start align-self-center align-items-center">
                {props.icon}
                <div className='ms-1 headline'>{props.text}</div>
            </div>
        </Clickable>
    );
}
    
export default IconedButton;