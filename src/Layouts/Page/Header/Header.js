import SearchField from "./Components/SearchField";
import Account from "./Components/Account";
import IconsRow from "./Components/IconsRow";
import styled from "styled-components";

const Container = styled.div`
    background-color: #F8FAFC;
`

function Header() {
    return (
        <Container className='d-flex justify-content-end align-items-center align-self-center px-4 py-3'>
            <SearchField/>
            <IconsRow/>
            <Account/>
        </Container>
    );
}

export default Header;