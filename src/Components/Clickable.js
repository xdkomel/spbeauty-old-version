
function Clickable(props) {
    let classes = 'clickable'
    if (props.fillWidth == true) {
        classes += ' fill-width'
    }
    return (
        <button class={classes}>{props.children}</button>
    );
}
  
export default Clickable;