import React from "react";
import banimg from '../assets/freetrial-BEqCy0BY.png'
import './subbanner.css';

const SubBanner = () => {
    return (
        <>
            <section className="px-4">
                <div className="main-trail d-flex justify-content-around">
                    <div className="col-2 trialImg d-none d-lg-block">
                        <img src={banimg} alt=""></img>
                    </div>
                    <div className="sub-trail">
                        <div className="trailhead">
                            <div className="h1 sec-heading text-light">Book Your Free Trail</div>
                        </div>
                        <div className="trail-text">Talk to an expert today and learn how Medicy can help your business</div>
                        <div className="trailButton">
                            <a href="/schedule/" className="btn btn-primary text-white fw-bold shadow btn-lg tbtn me-4">Get Demo</a>
                            <a href="" className="btn btn-primary text-white fw-bold shadow btn-lg tbtn">Join Us Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default SubBanner