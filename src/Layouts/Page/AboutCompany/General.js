import Profile from "./Profile";
import Preferences from "./Preferences";
import PrimaryButton from "../../../Components/PrimaryButton";
function General() {
    return (
        <div class='d-inline-flex flex-column'>
            <Profile/>
            <Preferences/>
            <div class='d-inline-flex mt-4'><PrimaryButton>Сохранить</PrimaryButton></div>
        </div>
    );
}

export default General;