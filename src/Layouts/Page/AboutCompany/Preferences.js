import TitledTextInput from "../../../Components/TitledTextInput";
import TitledSelector from "../../../Components/TitledSelector";
function Preferences() {
    return (
        <div class='d-inline-flex flex-column gap-4'>
            <TitledTextInput title='Название компании' text='SPBEAUTY'/>
            <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            <TitledTextInput title='Основной телефон для связи' text='+7 (912) 345-67-89'/>
        </div>
    );
}

export default Preferences