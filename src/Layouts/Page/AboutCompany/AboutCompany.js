import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/>
            <div className='d-flex flex-column mt-5'>
                <General/>
                <Addresses/>
            </div>
        </div>
    );
}

export default AboutCompany;