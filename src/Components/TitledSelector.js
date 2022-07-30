function TitledSelector(props) {
    const title = props.title == undefined ? 'Untitled' : props.title
    // const text = props.text == undefined ? 'Default' : props.text
    return (
        <div class='d-flex flex-column'>
            <div>{title}</div>
            <select class='text-input p-2 mt-3'>
                {props.options.map(optionName => {
                    return (
                        <option>{optionName}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default TitledSelector;