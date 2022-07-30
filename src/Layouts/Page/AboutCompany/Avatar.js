import UploadAvatarIcon from '../../../Icons/UploadAvatarIcon'
import Clickable from '../../../Components/Clickable';
function Avatar() {
    return (
        <div class='wrapper-avatar'>
            <img src={require('../../../images/AppAvatar.png')}></img>
            <Clickable>
                <div class='upload-button'><UploadAvatarIcon/></div>
            </Clickable>
        </div>
    );
}

export default Avatar