import useServices from "../../../Hooks/useServices/useServices";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className="container">
            <h1>this is service</h1>
            <div className="row row-cols-3 g-5">
                {services.map(service => <Service
                    key={service.key}
                    service={service}
                ></Service>)}
            </div>

        </div>
    );
};

export default Services;