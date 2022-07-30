function TitledTextInput(props) {
    const title = props.title == undefined ? 'Untitled' : props.title
    const text = props.text == undefined ? 'Default' : props.text
    return (
        <div class='d-flex flex-column'>
            <div>{title}</div>
            <input class='text-input p-2 mt-3' value={text}></input>
        </div>
    );
}

export default TitledTextInput;