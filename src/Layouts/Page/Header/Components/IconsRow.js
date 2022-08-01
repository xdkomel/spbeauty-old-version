import styled from "styled-components";
import Clickable from "../../../../Components/Clickable";
import MessagesIcon from "../../../../Icons/MessagesIcon";
import NotificationsIcon from "../../../../Icons/NotificationsIcon";

const ButtonWrapper = styled.div`
    &:hover {
        opacity: 70%;
    }
`;

function IconsRow() {
    return (
        <div className='d-inline-flex'>
            <Clickable>
                <ButtonWrapper className='d-inline-flex ms-5 me-2'>
                    <MessagesIcon/>
                </ButtonWrapper>
            </Clickable>
            <Clickable>
                <ButtonWrapper className='d-inline-flex ms-2 me-5'>
                    <NotificationsIcon/>
                </ButtonWrapper>
            </Clickable>
        </div>
    );
}

export default IconsRow;