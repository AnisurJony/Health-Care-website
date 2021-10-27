import useServices from "../../../Hooks/useServices/useServices";
import FooterComp from "../../FooterComp/FooterComp";
import Service from "../Service/Service";
import './Services.css'


const Services = () => {

    const [services, setServices] = useServices();


    return (
        <>
            <div className="container service-style">

                <h1 className="my-5 service-text">Our <span className="text-info">Services</span></h1>

                <div className="row row-cols-3 g-5">

                    {services.map(service => <Service

                        key={service.key}

                        service={service}
                    ></Service>)}

                </div>

            </div>

            <FooterComp></FooterComp>
        </>
    );

};

export default Services;