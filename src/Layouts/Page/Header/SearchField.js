import Clickable from '../../../Components/Clickable';
import SearchIcon from '../../../Icons/SearchIcon'
function SearchField() {
    return (
        <div class='wrapper-input d-inline-flex'>
            <input class='px-3 py-2 text-input light-gray-background input' placeholder='Найти'/>
            <div class='search-icon'><Clickable><SearchIcon/></Clickable></div>
        </div>
    );
}

export default SearchField;