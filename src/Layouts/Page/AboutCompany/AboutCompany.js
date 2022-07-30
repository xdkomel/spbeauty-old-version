import PrimaryButton from "../../../Components/PrimaryButton";
import SecondaryButton from "../../../Components/SecondaryButton";
import TitledSelector from "../../../Components/TitledSelector";
import TitledTextInput from "../../../Components/TitledTextInput";
import Avatar from "./Avatar";

function AboutCompany() {
    return (
        <div>
            <div class='d-flex mt-5 flex-column'>
                <div class='d-flex flex-row justify-content-between'>
                    <h1 class='large-title'>Данные о компании</h1>
                    <SecondaryButton>Закрыть запись</SecondaryButton>
                </div>
                <div class='d-inline-flex flex-row'>
                    <Avatar/>
                    <div class='ms-3 d-inline-flex flex-column  justify-content-center'>
                        <div class='title mb-2 steel-gray-900'>SPBEAUTY</div>
                        <div class='mb-2 steel-gray-500'>Салон красоты</div>
                        <div class='steel-gray-500'>Санкт-Петербург, Невский пр-т. 28</div>
                    </div>
                </div>
                <div class='d-inline-flex flex-column gap-4'>
                    <TitledTextInput title='Название компании' text='SPBEAUTY'/>
                    <TitledSelector title='Тип организации' options={[
                        'Салон красоты',
                        'Парикмахерская'
                    ]}/>
                    <TitledTextInput title='Основной телефон для связи' text='+7 (912) 345-67-89'/>
                </div>
                <div class='d-inline-flex mt-4'><PrimaryButton>Сохранить</PrimaryButton></div>
            </div>
            <div class='d-flex mt-5 flex-column'>
                
            </div>
        </div>
    );
}

export default AboutCompany;