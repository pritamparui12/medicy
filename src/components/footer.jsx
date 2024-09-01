import React from "react";
import './footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaFacebookSquare , FaInstagramSquare, FaLinkedin, FaTwitterSquare,FaPhone} from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="footer-frame">
                <section className="footer-sec frame-about-us-careers">
                    <footer className="frame-important-text">
                        <div className="support-frame">
                            <div className="framework-about-us row justify-content-center pt-4">
                                <div className="footer-col-1 col-12 col-lg-5">
                                    <h2 className="footer-title">Contact Area</h2>
                                    <div className="footer-contact-box mt-4">
                                        <div className="social-box">
                                        <FaFacebookSquare size={30} className="facebook-icon icon" />
                                       <FaInstagramSquare size={30} className="instagram-icon icon" />
                                       <FaLinkedin size={30} className="linkedin-icon icon" />
                                       <FaTwitterSquare size={30} className="twitter-icon icon " />

                                        </div>
                                        <div className="contact-box">
                                            <div className="contact">
                                                <div className="icon-bx">
                                                    <FaPhone size={30} className="mobile"/>
                                                </div>
                                                <div className="supportmedicyin2">
                                                    <p className="m-0">+91 7699753019</p>
                                                    <p className="m-0">contact@medicy.in</p>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="icon-bx">
                                                    
                                                    <LocationOnIcon className="locationicon"></LocationOnIcon>
                                                    
                                                </div>
                                                <div className="supportmedicyin2">
                                                    <p className="m-0">Pirgacha, Barasat</p>
                                                    <p className="m-0">West Bengal, India, 700125</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-col-2 col-5 col-lg-2 col-xl-3 mt-3 mt-lg-0">
                                    <h2 className="footer-title">Important</h2>
                                    <div className="footer-list-item-box ps-1  mt-4">
                                        <a className="footer-list-item" href="/about">About Us</a>
                                        <a className="footer-list-item" target="_blank" href="https://leelija.com/career.php">Careers</a>
                                        <a className="footer-list-item" href="/contact">Support</a>
                                        <a className="footer-list-item" href="/privacy-policy/">Privacy Policy</a>
                                        <a className="footer-list-item" href="/terms-conditions/">Terms and conditions</a>
                                    </div>
                                </div>
                                <div className="footer-col-3 col-5 col-lg-2 col-xl-3 mt-3 mt-lg-0"><h2 className="footer-title">Company</h2><div className="footer-list-item-box ps-1 mt-4">
                                    <a className="footer-list-item" href="/schedule">Schedule Meeting</a>
                                    <a className="footer-list-item" href="/">Documentation</a>
                                    <a className="footer-list-item" href="/pricing">Pricing</a>
                                    <a className="footer-list-item" href="/refund-policy/">Refund Policy</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <p className="copyright-text small">© 2024 Medicy. All rights reserved.</p>
                    </footer>
                </section>
            </div>
        </footer>
    )
}
export default Footer