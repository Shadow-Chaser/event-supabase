import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="banner-container">
            <div className="banner-content text-center">
                <h1 className="animate__animated animate__backInDown" style={{ animationDelay: '0.5s' }}>Event <span style={{ color: 'aqua', fontWeight: '700' }}>Fairy</span></h1>
                <h3 className="animate__animated animate__flash" style={{ animationDelay: '1.5s' }}>All Events Should be <span style={{ color: 'aqua', fontWeight: '700' }} >memorable!</span></h3>
                <br />
                <button type="submit" className="btn  btnSubmit animate__animated animate__heartBeat" style={{ animationDelay: '2.5s' }} >Explore</button>
            </div>
        </div>
    );
};

export default HeaderMain;