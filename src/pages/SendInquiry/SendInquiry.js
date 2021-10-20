import React from 'react';

const SendInquiry = () => {
    return (
        <div>
            <h1 className="my-5">Make an inquiry</h1>
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
                <input type="submit" />
            </form>
        </div >
    );
};

export default SendInquiry;