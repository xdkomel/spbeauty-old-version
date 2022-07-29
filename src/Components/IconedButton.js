function IconedButton(props) {
    return (
        <button class="d-flex align-self-center align-items-center justify-content-start button">
            {props.icon}
            <div class='ms-2 headline'>{props.text}</div>
        </button>
    );
  }
  
  export default IconedButton;