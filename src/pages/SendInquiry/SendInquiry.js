import React from 'react';
import FooterComp from '../FooterComp/FooterComp';
import './SendInquiry.css'
const SendInquiry = () => {
    return (
        <>
            <div className="inquiry-form">
                <h1 className="my-5 "><span className="text-info">Make an</span> inquiry</h1>
                <form>
                    <input type="text" placeholder="Name" />
                    <br />
                    <br />
                    <input type="email" placeholder="dreamcare@hospital.com" />
                    <br />
                    <br />
                    <textarea rows="6" cols="25"></textarea>
                    <br />
                    <br />
                    <input className="inquiry-btn" type="submit" />
                </form>
            </div >
            <FooterComp></FooterComp>
        </>
    );
};

export default SendInquiry;