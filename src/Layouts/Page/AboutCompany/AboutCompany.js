import Heading from "./Heading";
import General from "./General";
import Addresses from "./Addresses";
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