import Clickable from "./Clickable";
import styled from "styled-components";

const Button = styled.div`
    border: solid #152842 1px;
    background-color: #4B759E;
    min-width: 144px;
    color: white;
    &:hover {
        background-color: #4B759EB8;
    }
`;

function SecondaryButton(props) {
    return (
        <Clickable >
            <Button className='p-2 headline'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;