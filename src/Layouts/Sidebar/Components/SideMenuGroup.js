import SideMenuLink from "./SideMenuLink";
import styled from "styled-components";



function SideMenuGroup({icon, groupName, groupId, tabs, active}) {
    return (
        <div>
            {/* Makes a Menu group's heading with the specified icon and groupName */}
            <SideMenuLink name={groupName} isActive={groupId == active} icon={icon}/>
            
            {/* Makes all the options with the specified active. */}
            {tabs.map(tab => {
                return (
                    <div key={tab[1]}>
                        <SideMenuLink name={tab[0]} isActive={tab[1] == active}/>
                    </div>
                );
            })}
        </div>
    );
}
  
export default SideMenuGroup;