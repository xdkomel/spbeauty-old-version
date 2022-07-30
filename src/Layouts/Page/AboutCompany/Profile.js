import Avatar from "./Avatar";
function Profile() {
    return (
        <div class='d-inline-flex flex-row'>
            <Avatar/>
            <div class='ms-3 d-inline-flex flex-column justify-content-center gap-2'>
                <div class='title steel-gray-900'>SPBEAUTY</div>
                <div class='steel-gray-500'>Салон красоты</div>
                <div class='steel-gray-500'>Санкт-Петербург, Невский пр-т. 28</div>
            </div>
        </div>
    );
}

export default Profile