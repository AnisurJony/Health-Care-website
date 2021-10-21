import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner/banner (1).jpg';
import banner2 from '../../../images/banner/banner (2).jpg';
import banner3 from '../../../images/banner/banner (3).jpg';
import Footer from '../../Footer/Footer';
import ServiceCategory from '../ServiceCategory/ServiceCategory';
import './Home.css'

const Home = () => {
    return (
        <div >

            <div className="">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner "
                            src={banner1}
                            alt="First slide"

                        />
                        <Carousel.Caption className="caption">
                            <div className="text-style">
                                <h2>Welcome to</h2>
                                <h1><span className="style-header">Dream Care </span>Hospital</h1>
                                <p>Dream Care Hospital has provided pharmacy benefit management services to us since October 1, 2004.</p>
                                <button className="book-btn"><Link to="/booknow">Book An Appointment</Link></button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="caption">
                            <div className="text-style">
                                <h2>Welcome to</h2>
                                <h1><span className="style-header">Dream Care </span>Hospital</h1>
                                <p>Dream Care Hospital has provided pharmacy benefit management services to us since October 1, 2004.</p>
                                <button className="book-btn"><Link to="/booknow">Book An Appointment</Link></button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="caption">
                            <div className="text-style">
                                <h2>Welcome to</h2>
                                <h1><span className="style-header">Dream Care </span>Hospital</h1>
                                <p>Dream Care Hospital has provided pharmacy benefit management services to us since October 1, 2004.</p>
                                <button className="book-btn"><Link to="/booknow">Book An Appointment</Link></button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="mt-5">
                <div className='my-5'>
                    <h2 className="mb-4 service-head">Our Services</h2>
                    <ServiceCategory></ServiceCategory>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;