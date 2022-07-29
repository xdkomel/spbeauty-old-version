import ArrowExpandIcon from '../../../Icons/ArrowExpandIcon'

function SideMenuLink(props) {
    const DivStyle = {
        borderRadius: 32,
        backgroundColor: props.isActive ? '#E6EAEE' : '#F8FAFC'
    }
    
    return (
        <button class="d-flex align-self-center align-items-center justify-content-start px-3 py-2 button" style={DivStyle}>
            <ArrowExpandIcon/>
            <div class='ms-2'>{props.name}</div>
        </button>
    );
  }
  
  export default SideMenuLink;