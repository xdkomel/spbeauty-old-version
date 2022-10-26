import SearchField from "./Components/SearchField";
import Account from "./Components/Account";
import IconsRow from "./Components/IconsRow";
import styled from "styled-components";
import PrimaryButton from "../../../Components/PrimaryButton";
import ArrowLeft from "../../../Images/ArrowLeft"
import ArrowRight from "../../../Images/ArrowRight"

const Container = styled.div`
    background: linear-gradient(180deg, #587DA2 0%, #36699D 100%);
`;

function Header() {
    return (
        <Container className='d-flex justify-content-between align-items-center align-self-center px-4 py-3'>
            <div className="d-inline-flex gap-1"> {/* Левая часть */}
                <PrimaryButton minWidth='36px'><ArrowLeft/></PrimaryButton>
                <PrimaryButton>Сегодня</PrimaryButton>
                <PrimaryButton minWidth='36px'><ArrowRight/></PrimaryButton>
            </div>
            <div className="d-inline-flex"> {/* Правая часть */}
                <div className='me-4'> 
                    <SearchField/>
                </div>
                <IconsRow/>  {/* Кнопки для сообщений и уведомлений */}
                <div className='ms-3'>
                    <Account/>  {/* Аватар и имя пользователя */}
                </div>
            </div>
        </Container>
    );
}

export default Header;