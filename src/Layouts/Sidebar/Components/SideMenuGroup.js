import SideMenuLink from "./SideMenuLink";

function SideMenuGroup({icon, groupName, tabs, active}) {
    return (
        <div className='mt-2'>
            {/* Makes a Menu group's heading with the specified icon and groupName */}
            <div className="d-flex align-self-center align-items-center justify-content-start px-3 py-2">
                {icon}
                <div className='ms-2'>{groupName}</div>
            </div>
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