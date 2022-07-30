import './App.css';
import Sidebar from './Layouts/Sidebar/Sidebar'
import Page from './Layouts/Page/Page';
import styled from 'styled-components'

const Div = styled.div`
color: red;
`

function App() {
  return (
    <Div>TEXT</Div>
    // <div class='d-flex flex-row'>
    //   <Sidebar/>
    //   <Page/>
    // </div>
  );
}

export default App;
