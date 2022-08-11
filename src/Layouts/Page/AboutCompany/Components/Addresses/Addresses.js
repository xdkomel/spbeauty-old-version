import PrimaryButton from "../../../../../Components/PrimaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2'>
            <div className='text-rg'>Адреса заведений</div>
            <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
            <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            <PrimaryButton>Добавить филиал</PrimaryButton>
        </div>
    );
}

export default Addresses;