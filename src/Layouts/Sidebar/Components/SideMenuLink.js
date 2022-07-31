import ArrowExpandIcon from '../../../Icons/ArrowExpandIcon';
import Clickable from '../../../Components/Clickable';
import styled from 'styled-components';

function SideMenuLink(props) {
    const Container = styled.div`
        border-radius: 32px;
        background-color: ${props.isActive ? '#E6EAEE' : '#F8FAFC'};

        &:hover {
            color: #909CAD;
        }
    `;
    
    return (
        <Clickable fillWidth={true}>
            <Container className="d-flex align-self-center align-items-center justify-content-start px-3 py-2">
                <ArrowExpandIcon/>
                <div className='ms-2'>{props.name}</div>
            </Container>
        </Clickable>
    );
  }
  
  export default SideMenuLink;