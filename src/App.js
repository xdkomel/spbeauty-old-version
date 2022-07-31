// import './App.css';
import Sidebar from './Layouts/Sidebar/Sidebar'
import Page from './Layouts/Page/Page';

import IconedButton from './Components/IconedButton';
import ArrowBackIcon from './Icons/ArrowBackIcon';


function App() {
  return (
    <div className='d-flex flex-row'>
      <Sidebar/>
      <Page/>
    </div>
  );
}

export default App;
