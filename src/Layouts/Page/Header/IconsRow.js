import Clickable from "../../../Components/Clickable";
import MessagesIcon from "../../../Icons/MessagesIcon";
import NotificationsIcon from "../../../Icons/NotificationsIcon";

function IconsRow() {
    return (
        <div class='d-inline-flex'>
            <div class='d-inline-flex ms-5 me-2'><Clickable><MessagesIcon/></Clickable></div>
            <div class='d-inline-flex ms-2 me-5'><Clickable><NotificationsIcon/></Clickable></div>
        </div>
    );
}

export default IconsRow;