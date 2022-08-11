import Clickable from "./Clickable";
import styled from "styled-components";

const Button = styled.div`
    background: #4B759E;
    border: 1px solid #152842;
    box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
    min-width: 144px;
    color: white;
    &:hover {
        background: linear-gradient(180deg, #4D9FF0 0%, #36699D 100%);
    }
    &:active {
        background: #152842;
    }
`;

function PrimaryButton(props) {
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;