import styled from "styled-components";

const Select = styled.select`
    background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background-color: #F8FAFC;
    color: #666787;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ?
        (<div className = 'd-flex flex-row align-center p-1 gap-2'></div>) : 
        (<div className = 'caption'>{title}</div>);
    
        return (
        <div className='d-flex flex-column gap-1'>
            {Title}
            <Select className='p-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;