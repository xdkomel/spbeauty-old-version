import Clickable from '../../../Components/Clickable';
import ArrowDownIcon from '../../../Icons/ArrowDownIcon';
function Account() {
    return (
        <div class='d-inline-flex'>
        <Clickable>
        <div class='d-inline-flex align-items-center align-self-center'>
            <img src={require('../../../images/Avatar.png')}></img>
            <div class='steel-gray-900 ms-3 me-1'>Антон И.</div>
            <ArrowDownIcon/>
        </div>
        </Clickable>
        </div>
        
    );
}

export default Account;