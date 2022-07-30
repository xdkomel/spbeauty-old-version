import SecondaryButton from "../../../Components/SecondaryButton";
function Heading() {
    return (
        <div class='d-flex mt-5 flex-column'>
            <div class='d-flex flex-row justify-content-between'>
                <h1 class='large-title'>Данные о компании</h1>
                <SecondaryButton>Закрыть запись</SecondaryButton>
            </div>
        </div>
    );
}

export default Heading;