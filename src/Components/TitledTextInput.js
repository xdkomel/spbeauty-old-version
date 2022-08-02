import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput(props) {
    const title = props.title == undefined ? 'Untitled' : props.title;
    const text = props.text == undefined ? 'Default' : props.text;
    return (
        <div className='d-flex flex-column'>
            <div>{title}</div>
            <Input className='p-2 mt-3' defaultValue={text} ></Input>
        </div>
    );
}

export default TitledTextInput;