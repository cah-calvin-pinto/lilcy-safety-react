import React from 'react';
import './Services.css';

export default function Services() {
    return (
        <>
            <div className="services-container">
                <div className="services-header">
                    <h2 >We go an extra mile for you!</h2>
                </div>
                <hr />
                <div className="services-para">
                    <p><strong>Currently, our main objective is supplying uniforms, including work-wear and corporate wear, in the UAE market. We also supply PPE products, which include fire protective clothing, head, eye, face, foot, respiratory  and ear protection equipment</strong></p>
                </div>
            </div>
            <div className="wcu-housing">
                <div className="wcu-container">
                   <h1 className="wcu-header" >Why choose us?</h1>
                   <div className="wcu-items">
                        <div>
                           <div className="wcu-icons"><span><i className="fas fa-dollar-sign"></i></span></div>
                           <div><span className="wcu-span">Cost effective</span></div>
                        </div>
                        <div>
                           <div className="wcu-icons"><span><i class="fas fa-stopwatch"></i></span></div>
                           <div><span className="wcu-span">Fast delivery</span></div>
                        </div>
                        <div>
                           <div className="wcu-icons"><span><i class="far fa-handshake"></i></span></div>
                           <div><span className="wcu-span">Trust</span></div>
                        </div>
                        <div>
                           <div className="wcu-icons"><span><i className="fas fa-users"></i></span></div>
                           <div><span className="wcu-span">Customer satisfaction</span></div>
                        </div>
                   </div>
                </div>
            </div>
               
        </>
    )
}
