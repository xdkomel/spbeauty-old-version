import Clickable from "./Clickable";
import styled from "styled-components";

const Button = styled.div`
    background: #F2F2F2;
    border: 1px solid #DFDFDF;
    box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
    min-width: 144px;
    color: #152842;
    &:hover {
        background: linear-gradient(180deg, #DFEAF1 0%, #CFDDE8 100%);
    }
    &:active {
        background: #DFDFDF;
    }
`;

function SecondaryButton(props) {
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;