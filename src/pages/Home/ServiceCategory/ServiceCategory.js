import Button from '@restart/ui/esm/Button';
import React from 'react';
import './ServiceCategory.css';
import { Link } from 'react-router-dom';
import pic1 from '../../../images/serviceCategory/blog-1.png'
import pic2 from '../../../images/serviceCategory/blog-2.png'
import pic3 from '../../../images/serviceCategory/blog-3.png'
const ServiceCategory = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={pic1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">pediatrics</h5>
                            <p className="card-text"> General paediatrics - a hospital role covering children from birth to the age of 16. Most paediatricians have this generalist role.</p>
                            <Button variant="primary" className=" btn-style"><Link to="/services">Go to Services</Link></Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={pic2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dental Care</h5>
                            <p className="card-text">Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean . </p>
                            <Button variant="primary " className=" btn-style"><Link to="/services">Go to Services</Link></Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={pic3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Healing Care</h5>
                            <p className="card-text">Counseling Training. Emotional Healing. Skills for Ministry. Learn how to position yourself and others for deep healing in the presence of Allah.</p>

                            <Button variant="primary" className=" btn-style"><Link to="/services">Go to Services</Link></Button>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ServiceCategory;