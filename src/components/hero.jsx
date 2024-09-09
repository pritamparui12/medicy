import React from "react";
import './hero.css'
import img1 from '../assets/chooseus.png'
import gst from '../assets/icon/simplifiGST1-DQJND21x.svg'
import heart from '../assets/icon/heart.svg'
import report from '../assets/icon/report.svg'
import bin from '../assets/icon/bin.svg'
import cloud from '../assets/icon/cloud.svg'
import secure from '../assets/icon/secure.svg'
import money from '../assets/icon/money.svg'
import support from '../assets/icon/support.svg'

const Hero = () => {

    return (
        <section classNameName="hero">
            <div class="my-5">
                <div class="text-center">
                    <h2 class="sec-heading h1 med-main-blue mb-5">Why Choose Us ?</h2>
                    </div>
            </div>
            <div className="d-flex mx-4">
                <div className="d-flex" >
                    <img className="wcuLeftImg "  src={img1} alt=""></img>
                </div>
                <div className="col-1 ms" >
                    <div className="borderCircle">
                    </div>
                </div>
                <div className="col-8 my-5 mt-4">
                    <div className="d-flex mt-5 icon-right">
                        <div className="col-2  rounded-circle circleIcon" >
                            <img src={heart} alt="" />
                           
                        </div>
                        <div className="be-always-connected  gap" >
                            <div className="d-flex justify-content-center">

                            </div>
                            <h3 className="wcuSubHead mt-3">Complete Healthcare Solution</h3>
                            Medicy is a holistic healthcare management software that is a one-stop solution for pharmacy, diagnostic, OPD, and inventory management. It is one of the best suites 
                            .</div>
                        </div>
                    <div className="d-flex mt-2  ">
                        <div className="col-2 rounded-circle circleIcon" >
                            <img src={cloud} alt="" />
                        </div>
                        <div className="be-always-connected " >
                            <div className="d-flex justify-content-center">

                            </div>
                            <h3 className="wcuSubHead mt-3">Cloud Based Software</h3>We present a cloud-based platform. This software allows you to access your healthcare management system anytime and anywhere. We offer excellent flexibility and scalability to meet all your clinical management, stock management, and doctor appointment management demands.</div>
                    </div>
                    <div className="d-flex mt-2 ">
                        <div className="col-2 rounded-circle circleIcon" >
                            <img src={report} alt="" />
                        </div>
                        <div className="be-always-connected ">
                            <div className="d-flex justify-content-center">
                            </div><h3 className="wcuSubHead mt-3">Easy Report Generation</h3>Our EHR (Electronic Health Record) system simplifies the report generation process. Being one of the best clinic management software India, we are dedicated to offering real-time and patient-centric records generation.</div>
                    </div>
                    <div className="d-flex mt-2 icon-right">
                        <div className="col-2 rounded-circle circleIcon" >
                        <img src={gst} alt="" />
                        </div>
                        <div className="be-always-connected  gap" >
                            <div className="d-flex justify-content-center">
                            </div><h3 className="wcuSubHead mt-3">Simplify GST Billing</h3>Our billing software allows effortless GST billing and return filing. With 100% error-free GST invoice generation, strengthen your billing techniques. Simplify your tax management with Medicy.</div>
                    </div>
                </div>

            </div>
            
            <div className="d-flex mx-4">
                
            <div className="col-8 my-5 mt-4 lol" >
                    <div className="d-flex mt-5 righticon">
                        
                        <div className="be-always-connected  gapright" >
                            <div className="d-flex justify-content-center">
                            </div>
                            <h3 className="wcuSubHead mt-3">
                                Complete Healthcare Solution</h3>Medicy is a holistic healthcare management software that is a one-stop solution for pharmacy, diagnostic, OPD, and inventory management. It is one of the best suites for all healthcare provider’s needs.</div>
                    
                            <div className="col-2  rounded-circle circleIcon" >
                            <img src={secure} alt="" />
                            </div>
                    </div>
                    
                    
                    <div className="d-flex mt-2">
                        
                        <div className="be-always-connected " >
                            <div className="d-flex justify-content-center">
                            </div><h3 className="wcuSubHead mt-3">Cloud Based Software</h3>We present a cloud-based platform. This software allows you to access your healthcare management system anytime and anywhere. We offer excellent flexibility and scalability to meet all your clinical management, stock management, and doctor appointment management demands.</div>
                            <div className="col-2 rounded-circle circleIcon" >
                                <img src={support} alt="" />
                            </div>
                    </div>
                    <div className="d-flex mt-2">
                        
                        <div className="be-always-connected ">
                            <div className="d-flex justify-content-center">
                            </div><h3 className="wcuSubHead mt-3">Easy Report Generation</h3>Our EHR (Electronic Health Record) system simplifies the report generation process. Being one of the best clinic management software India, we are dedicated to offering real-time and patient-centric records generation.</div>
                            <div className="col-2 rounded-circle circleIcon" >
                                <img src={money} alt="" />
                            </div>
                    </div>
                    <div className="d-flex mt-2 righticon">
                        
                        <div className="be-always-connected gapright" >
                            <div className="d-flex justify-content-center">
                            </div><h3 className="wcuSubHead mt-3">Simplify GST Billing</h3>Our billing software allows effortless GST billing and return filing. With 100% error-free GST invoice generation, strengthen your billing techniques. Simplify your tax management with Medicy.</div>
                            <div className="col-2 rounded-circle circleIcon" >
                                <img src={bin} alt="" />
                            </div>
                    </div>
                </div>
                
                <div className="col-1 ms" >
                    <div className="borderCircleright">
                    </div>
                </div>
                <div className="d-flex" >
                    <img className="wcuLeftImg "  src={img1} alt=""></img>
                </div>
                
            </div>



        </section>
    )
}
export default Hero