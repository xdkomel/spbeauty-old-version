import styled from 'styled-components';
import Clickable from '../../../../Components/Clickable';
import SearchIcon from '../../../../Icons/SearchIcon';

const WrapperInput = styled.div`
    position:relative;
    width: 200px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    width: 100%;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    box-sizing:border-box;
    right: 12px;
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>
            <Input className='px-3 py-2' placeholder='Найти'/>
            <SearchIconWrapper><Clickable><SearchIcon/></Clickable></SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;