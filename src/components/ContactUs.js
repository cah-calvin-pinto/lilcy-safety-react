import React from 'react';
import './ContactUs.css';
import Footer from './Footer';
import Form from './Form';

export default function ContactUs() {
    return (
        <>
            <div className="ContactUs-container">
                <div className="ContactUs-header">
                    <h1>Let's Get In Touch!</h1>
                </div>
                <div className="ContactUs-para">
                    <p><strong>Ready to start working with us? Give us a call or send us an email and we will get back to you as soon as possible!</strong></p>
                </div>
                <div className="ContactUs-contact">
                    <div className="ContactUs-contactInner1">
                        <div>
                        <i className="fas fa-mobile-alt ContactUs-phone-icon"></i>
                        </div>
                        <div>
                            <span><strong>+971-50-7646119</strong></span>
                        </div>
                    </div>
                    <div className="ContactUs-contactInner2">
                        <div>
                            <i className="fas fa-envelope fa-3x mb"></i>
                        </div>
                        <div>
                        <a className="color" href="mailto:contact@yourwebsite.com"><strong>sales@lilcysafety.com</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-housing">
                <Form />
            </div>
            <Footer/>
        </>
    )
}
