import Clickable from '../../../../../Components/Clickable';
import styled from 'styled-components';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';

const Button = styled.div`
    background-color: #F2F2F2;
    border: solid #DFDFDF 1px;
    color: #2C3540;
    &:hover {
        color: #2C3540B8;
    }
`;

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-1'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <Clickable>
                <Button className='ms-1 p-2'>Ред.</Button>
            </Clickable>   
            <Clickable>
                <Button className='ms-1 p-2'>Удл.</Button>
            </Clickable>
        </div>
    );
}

export default ListElement;