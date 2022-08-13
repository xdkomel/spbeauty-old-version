import Clickable from '../../../../Components/Clickable';
import ArrowDownIcon from '../../../../Icons/ArrowDownIcon';
import styled from 'styled-components';

const Text = styled.div`
    color: #0F172A;
`;
const HoverWrapper = styled.div`
    display: inherit;
    &:hover {
        opacity: 80%;
    }
`;

function Account() {
    return (
        <Clickable>
            <div className='d-inline-flex align-items-center align-self-center'>
                <img src={require('../../../../Images/Avatar.png')}></img>  {/* Avatar image */}
                <HoverWrapper className='d-inline-flex align-items-center align-self-center'>
                    <Text className='text-rg-bd ms-3 me-2'>Антон И.</Text>  {/* Account holder name */}
                    <ArrowDownIcon/>
                </HoverWrapper>
            </div>
        </Clickable>
    );
}

export default Account;