
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';

import banner1 from '../../../images/serviceCategory/blog-1.png'

const ServiceDetails = () => {
    const { serviceId } = useParams();


    return (
        <div className="container">
            <h2 className="my-5"><span className="text-info">Service</span> Details {serviceId}</h2>

            <div>
                <Image src={banner1} fluid />
            </div>
            <div className="my-4">
                <p>Hospital services make up the core of a hospital's offerings. They are often shaped by the needs or wishes of its major users to make the hospital a one-stop or core institution of its local commun ity or medical network. Hospitals are institutions comprising basic services and personnel—usually departments of medicine and surgery—that administer clinical and other services for specific diseases and conditions, as well as emergency services. Hospital services cover a range of medical offerings from basic health care necessities or training and research for major medical school centers to services designed by an industry-owned network of such institutions as health maintenance organizations (HMOs). The mix of services that a hospital may offer depends almost entirely upon its basic mission(s) or objective(s).

                    Read more: https://www.surgeryencyclopedia.com/Fi-La/Hospital-Services.html#ixzz79x2vz23w</p>
            </div>
        </div>
    );
};

export default ServiceDetails;