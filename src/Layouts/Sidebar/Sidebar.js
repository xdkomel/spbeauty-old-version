import SideMenuContents from "./Components/SideMenuContents";
import IconedButton from "../../Components/IconedButton"
import ArrowBackIcon from "../../Icons/ArrowBackIcon"

function Sidebar() {
    return (
        <div class='grey-text px-1 light-grey-background fill-y'>
            <div class='p-3'>
                <IconedButton text='На главную' icon={<ArrowBackIcon/>}/>
            </div>
            <SideMenuContents/>
        </div>
        
    );
  }
  
  export default Sidebar;