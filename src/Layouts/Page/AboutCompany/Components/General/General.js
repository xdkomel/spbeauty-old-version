import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
function General() {
    return (
        <div className='d-inline-flex flex-column col no_padding'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </div>
    );
}

export default General;