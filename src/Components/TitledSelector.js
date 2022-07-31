import styled from "styled-components";

const Select = styled.select`
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledSelector(props) {
    const title = props.title == undefined ? 'Untitled' : props.title;
    return (
        <div className='d-flex flex-column'>
            <div>{title}</div>
            <Select className='p-2 mt-3'>
                {props.options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;