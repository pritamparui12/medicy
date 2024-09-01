import React from 'react';
import banlogo from'../assets/R.png';
import './catalog.css';
const CatalogBanner=() => {
    return (
        <>
            <div className="catalogue-banner">
                <div className="subcat-banner">
                    <div className="leftcatalouge">
                        <div className="leftcat-tag">
                            <h3>2,50,000+ Medicines Listing</h3><h5>On Request New Medicine </h5>
                            <p>Find in-stock alternatives in real-time while billing and reduce customer bounce rate.</p>
                        </div>
                        <div className="catalougebtn">
                            <a className="btn btn-light text-primary btn-lg mt-4" href="https://app.medicy.in/login.php">Get Started</a>
                        </div>
                    </div>
                    <div className="rightcatalouge d-flex justify-content-end">
                        <img src={banlogo} alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CatalogBanner;