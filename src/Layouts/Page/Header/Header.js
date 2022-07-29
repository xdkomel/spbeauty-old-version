import SearchField from "./SearchField";
import Account from "./Account"
import IconsRow from "./IconsRow";

function Header() {
    return (
        <div class='d-flex justify-content-end align-items-center align-self-center p-3 light-gray-background'>
            <SearchField/>
            <IconsRow/>
            <Account/>
        </div>
    );
}

export default Header;