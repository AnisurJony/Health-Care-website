import React from 'react';
import FooterComp from '../../FooterComp/FooterComp';
import './BookNow.css'
const BookNow = () => {
    return (
        <>
            <div className="inquiry-form">
                <h1 className="my-5 "><span className="text-info">Book An</span> Appointment</h1>
                <form>
                    <input type="text" placeholder="Name" />
                    <br />
                    <br />
                    <input type="number" placeholder="Phone Number" />
                    <br />
                    <br />
                    <input type="text" placeholder="Doctor Name" />
                    <br />
                    <br />
                    <input className="style-inpute me-3" type="text" placeholder="Date" />
                    <input type="text" className="style-inpute" placeholder="Time AM/PM" />
                    <br />
                    <br />
                    <input type="email" placeholder="dreamcare@hospital.com" />
                    <br />
                    <br />
                    <textarea rows="4" cols="40"></textarea>
                    <br />
                    <br />
                    <input className="book-btn" type="submit" />
                </form>
            </div >
            <FooterComp></FooterComp>
        </>
    );
};

export default BookNow;