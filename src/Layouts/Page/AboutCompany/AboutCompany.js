import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* The page's title and a button on the right */}
            <div className='d-flex flex-column mt-5'>
                <General/>  {/* The main info like name, type and phone number */}
                <Addresses/> {/* A list of addresses this company is available at */}
            </div>
        </div>
    );
}

export default AboutCompany;