import SideMenuLink from "./SideMenuLink";

function SideMenuGroup(props) {
    return (
        <div className='mt-2'>
            <div className="d-flex align-self-center align-items-center justify-content-start px-3 py-2">
                {props.icon}
                <div className='ms-2'>{props.groupName}</div>
            </div>
            {props.tabs.map(tab => {
                return (
                    <div key={tab[1]}>
                        <SideMenuLink name={tab[0]} isActive={tab[1] == props.active}/>
                    </div>
                );
            })}
        </div>
    );
}
  
export default SideMenuGroup;