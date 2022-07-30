import SideMenuContents from "./Components/SideMenuContents";
import IconedButton from "../../Components/IconedButton";
import ArrowBackIcon from "../../Icons/ArrowBackIcon";

function Sidebar() {
    return (
        <div class='steel-gray-500 px-1 light-gray-background fill-y stroke-right'>
            <div class='p-3'>
                <IconedButton text='На главную' icon={<ArrowBackIcon/>}/>
            </div>
            <SideMenuContents/>
        </div>
        
    );
  }
  
  export default Sidebar;