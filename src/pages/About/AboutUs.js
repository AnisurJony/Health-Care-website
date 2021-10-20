import React from 'react';
import image from '../../images/about/about-img.jpg'
const AboutUs = () => {
    return (
        <>
            <div className="my-5">
                <h1><span className="text-info">About</span> us</h1>
                <p>Description text here...</p>
            </div>

            <div className="d-flex container">


                <div>
                    <img src={image} alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <h4> <b>Dream Care Hospital</b> isIt is a long established fact that a reader will be distracted by the readable content.</h4>
                        <p>
                            “Dream Care Hospital has provided pharmacy benefit management services to us since October 1, 2004. The district has been pleased with Dream Care Hospital's services including their formulary management, plan administration, and clinical services. Dream Care Hospital has been a collaborative partner with the district. They have helped us to control costs, and are responsive to member questions/needs. An area of strength for Dream Care Hospital is their ability to communicate effectively with our district's leadership team. We look forward to building on our partnership with AHC.”
                            - Self-Insured Employer

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;