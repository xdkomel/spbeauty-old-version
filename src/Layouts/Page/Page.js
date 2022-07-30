import Header from "./Header/Header";
import AboutCompany from './AboutCompany/AboutCompany'

function Page() {
    return (
      <div class='flex-grow-1'>
        <Header/>
        <div class='container'>
          <AboutCompany/>
        </div>
      </div>
    );
  }
  
  export default Page;