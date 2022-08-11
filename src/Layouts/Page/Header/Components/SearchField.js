import styled from 'styled-components';
import Clickable from '../../../../Components/Clickable';
import SearchIcon from '../../../../Icons/SearchIcon';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    color: #152842;
    width: 100%;
    &:hover {
        background: linear-gradient(180deg, #DFEAF1 0%, #CFDDE8 100%);
    }
    &:focus {
        background: white;
    }
`;

const SearchIconWrapper = styled.div`
    background-color: #4B759E;
    position: absolute;
    box-sizing:border-box;
    right: 0px;
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>
            <Input className='p-2' placeholder='Найти на странице...'/>
            <SearchIconWrapper className='p-2'>
                <Clickable><SearchIcon/></Clickable>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;