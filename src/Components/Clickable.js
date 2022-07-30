
function Clickable(props) {
    let classes = 'clickable'
    classes += props.fillWidth ? ' fill-width' : ' fit-width'

    return (
        <button class={classes}>{props.children}</button>
    );
}
  
export default Clickable;