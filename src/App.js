import './App.css';
import Sidebar from './Layouts/Sidebar/Sidebar'
import Page from './Layouts/Page/Page';


function App() {
  return (
    <div class='d-flex flex-row'>
      <Sidebar/>
      <Page/>
    </div>
  );
}

export default App;
