import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-contact-us">
                    <div>
                    <span><i className="fas fa-mobile-alt"></i></span> <span><strong>: +971-50-7646119</strong></span>
                    <p><i className="fas fa-envelope fa-1x mb"></i><a className="home-contact-us-mail" href="mailto:contact@yourwebsite.com"><strong> : sales@lilcysafety.com</strong></a></p>
                    </div>
                </div>
                <div className="home-header">
                    <h1>Safety is everyone’s responsibility</h1>
                </div>
                <div className="home-para">
                    <p><strong>Lilcy safety requisites trading LLC is an established company aiming to meet the demands and the competetion in the UAE market. For
                        now, our major focus will be the UAE market and then we will try to spread our wings to the rest of the gulf region</strong></p>
                    <p><strong>We believe in fairness and credibility in our dealings with other companies. Our actions are guided by high moral
                            and ethical standards and we believe that these values are key to our company's success in the future.</strong></p>
                </div>
            </div>
        </>
    )
}
