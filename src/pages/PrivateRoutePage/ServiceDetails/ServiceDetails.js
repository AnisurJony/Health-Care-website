
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';




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

        const service = services.find(service => service.id = serviceId);
        setSelectedService(service);
    }, [serviceId, services])

    return (
        <div className="container">
            <h2 className="my-5">About <span className="text-info">{selectedService?.name}</span></h2>

            <div>
                <Image src={selectedService?.img} fluid />
            </div>
            <div className="my-4">
                <p>{selectedService?.description}</p>
            </div>
            <h2>Blogs are comming soon....</h2>
        </div>
    );
};

export default ServiceDetails;