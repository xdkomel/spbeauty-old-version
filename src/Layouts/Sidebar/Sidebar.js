import SideMenuContents from "./Components/SideMenuContents";
import IconedButton from "../../Components/IconedButton";
import ArrowBackIcon from "../../Icons/ArrowBackIcon";
import styled from 'styled-components';

const Container = styled.div`
    background-color: #F8FAFC;
    color: #64748B;
    height: 100vh;
    border-right: solid #ECEEF1 1px;
`;

const ButtonContainer = styled.div`
    &:hover {
        color: #64748BB8;
    }
`;

function Sidebar() {
    return (
        <Container className='px-1'>  
            <ButtonContainer className='p-3'> {/* Button on the top left */}
                <IconedButton text='На главную' icon={<ArrowBackIcon/>}/>
            </ButtonContainer>
            <SideMenuContents/> {/* Sidebar items */}
        </Container>
    );
}
  
export default Sidebar;