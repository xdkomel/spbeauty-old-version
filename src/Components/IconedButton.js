import Clickable from "./Clickable";
function IconedButton(props) {
    return (
        <Clickable>
            <div class="d-flex align-self-center align-items-center justify-content-start">
                {props.icon}
                <div class='ms-2 headline'>{props.text}</div>
            </div>
        </Clickable>
    );
  }
  
  export default IconedButton;