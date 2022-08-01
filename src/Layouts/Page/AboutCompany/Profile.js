import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center gap-2'>
                <div className='title steel-gray-900'>SPBEAUTY</div>
                <div className='steel-gray-500'>Салон красоты</div>
                <div className='steel-gray-500'>Санкт-Петербург, Невский пр-т. 28</div>
            </div>
        </div>
    );
}

export default Profile;