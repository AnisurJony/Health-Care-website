import React from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import banner1 from '../../../images/serviceCategory/blog-1.png'
const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>this is service details {serviceId}</h2>
            <div>
                <Image src={banner1} fluid />
            </div>
            <div>

            </div>
        </div>
    );
};

export default ServiceDetails;