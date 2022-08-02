import Clickable from "./Clickable";

function IconedButton({icon, text}) {
    return (
        <Clickable>
            <div className="d-flex flex-row justify-content-start align-self-center align-items-center">
                {icon}
                <div className='ms-1 headline'>{text}</div>
            </div>
        </Clickable>
    );
}
    
export default IconedButton;