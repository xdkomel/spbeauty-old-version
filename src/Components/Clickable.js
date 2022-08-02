import styled from 'styled-components';
/**
 * Makes an HTML structure clickable via putting it into a default button tag.
 * @param {*} props - are used without JS destruction:
 *                    {Boolean} fillWidth - if the clickable view fills its parent (default: false),
 *                    {*} children - the HTML structure.
 * @returns a clickable HTML structure.
 */
function Clickable(props) {
    const fill = props.fillWidth === true;
    const Button = styled.button`
        background:transparent;
        border: none;
        outline: none;
        color: inherit;
        padding: 0;
        margin: 0;
        transition: background 0.1s, color 0.1s, opacity 0.1s;
        width: ${fill ? '100%' : 'fit-content'}
    `;
    return (
        <Button>{props.children}</Button>
    );
}
  
export default Clickable;