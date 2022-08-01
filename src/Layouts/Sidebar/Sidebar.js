import SideMenuContents from "./Components/SideMenuContents";
import IconedButton from "../../Components/IconedButton";
import ArrowBackIcon from "../../Icons/ArrowBackIcon";
import styled from 'styled-components';

const Container = styled.div`
    background-color: #F8FAFC;
    color: #6474B8;
    height: 100vh;
    border-right: solid #ECEEF1 1px;
`;

const ButtonContainer = styled.div`
    &:hover {
        opacity: 0.7;
    }
`;

function Sidebar() {
    return (
        <Container className='px-1'>
            <ButtonContainer className='p-3'>
                <IconedButton text='На главную' icon={<ArrowBackIcon/>}/>
            </ButtonContainer>
            <SideMenuContents/>
        </Container>
    );
}
  
export default Sidebar;