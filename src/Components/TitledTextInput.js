import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    color: #666787;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput(props) {
    const title = props.title == undefined ? 'Untitled' : props.title;
    const text = props.text == undefined ? 'Default' : props.text;
    return (
        <div className='d-flex flex-column gap-2'>
            <div>{title}</div>
            <Input className='p-2' defaultValue={text} ></Input>
        </div>
    );
}

export default TitledTextInput;