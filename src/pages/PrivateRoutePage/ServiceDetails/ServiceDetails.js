
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';


// import banner1 from '../../../images/serviceCategory/blog-1.png'


const ServiceDetails = () => {


    const { serviceId } = useParams();


    const [services, setServices] = useState([]);

    const [selectedService, setSelectedService] = useState({});


    useEffect(() => {

        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {

        const service = services.find(ser => ser.id = serviceId);
        setSelectedService(service);
    }, [serviceId, services])

    return (
        <div className="container">
            <h2 className="my-5"><span className="text-info">Service</span> Details {serviceId}</h2>

            <div>
                <Image src={selectedService?.img} fluid />
            </div>
            <div className="my-4">
                <p>{selectedService?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;