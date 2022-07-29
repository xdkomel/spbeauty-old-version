import Clickable from '../../../Components/Clickable';
import SearchIcon from '../../../Icons/SearchIcon'
function SearchField() {
    return (
        <div class='wrapper d-inline-flex'>
            <input class='px-3 py-2 text-field light-gray-background input' placeholder='Найти'/>
            <div class='search-icon'><Clickable><SearchIcon/></Clickable></div>
        </div>
    );
}

export default SearchField;