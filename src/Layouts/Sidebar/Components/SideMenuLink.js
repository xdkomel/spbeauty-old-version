import ArrowExpandIcon from '../../../Icons/ArrowExpandIcon'
import Clickable from '../../../Components/Clickable';

function SideMenuLink(props) {
    const DivStyle = {
        borderRadius: 32,
        backgroundColor: props.isActive ? '#E6EAEE' : '#F8FAFC'
    }
    
    return (
        <Clickable fillWidth={true}>
        <div class="d-flex align-self-center align-items-center justify-content-start px-3 py-2" style={DivStyle}>
            <ArrowExpandIcon/>
            <div class='ms-2'>{props.name}</div>
        </div>
        </Clickable>
    );
  }
  
  export default SideMenuLink;