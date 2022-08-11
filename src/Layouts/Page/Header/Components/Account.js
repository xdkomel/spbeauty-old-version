import Clickable from '../../../../Components/Clickable';
import ArrowDownIcon from '../../../../Icons/ArrowDownIcon';
import styled from 'styled-components';

const Text = styled.div`
    color: #0F172A;
`;
const HoverWrapper = styled.div`
    display: inherit;
    &:hover {
        opacity: 70%;
    }
`;

function Account() {
    return (
        <Clickable>
        <div className='d-inline-flex align-items-center align-self-center'>
            <img src={require('../../../../Images/Avatar.png')}></img>
            <HoverWrapper>
                <Text className='text-rg-bg ms-2 me-1'>Антон И.</Text>
                <ArrowDownIcon/>
            </HoverWrapper>
            
        </div>
        </Clickable>
    );
}

export default Account;