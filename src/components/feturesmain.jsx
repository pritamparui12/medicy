import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './featuresmain.css'
import img1 from '../assets/pharmacy-management-medicy-DFEVrCYS (1).png'
import img2 from '../assets/opd-management.medicy-DZiP2ScB.png'
import img3 from '../assets/pathology-lab-management.medicy-DwJsOiDk.png'
import img4 from '../assets/inventory-management.medicy-BLqL74m3.png'
import img5 from '../assets/GST-billing-and Return-Filling-medicy-BWSzFzyW.png'
import { motion } from "framer-motion";
import { FadeIn } from "./variants";

const Featuresmain = () => {
    return (
        <>
            <section>
                <div className="featuresmain container-fluid">
                    <motion.div className="mainhead"
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 1 }}
                        whileInView={{ opacity: 1, y: 1 }}
                        viewport={{ once: true }}



                    >
                        <div className="featureHead">
                            <h2 className="sec-h2 ">
                                Key Features Of Medicy</h2>
                        </div>
                        <p>Here are the key features of our healthcare management software that can help you optimise the workflow and enhance patient experience.</p>
                    </motion.div>
                    <div className="main-card">
                        <div className="keycontent d-flex justify-content-evenly">
                            <motion.div className="maincontent"
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}



                            >
                                <h3 className="card-title">Pharmacy Management</h3>
                                <p className="card-text">Medicy’s online pharmacy software delivers a user-friendly dashboard. It offers Real-time Stock Updates and detailed insight into Overstock Expiry Reporting. The application allows healthcare providers to access features like Returns Management, Sales &amp; Purchase Report, Customer Payment Management, and Supplier and Payment Management. The pharmacy management system ensures perfect operations and efficient supplier management.</p>
                                <div className="keylist">
                                    <ul className="text-start">
                                        <li>Open stock, Real-time Stock Update</li>
                                        <li>Low Stock, Overstock Expiry Reporting</li>
                                        <li>Sales &amp; Purchase, Returns Management</li>
                                    </ul>
                                    <div>
                                        <ul className="text-start">
                                            <li>Sales &amp; Purchase Report</li>
                                            <li>Customer Payment Management</li>
                                            <li>Supplier and Payment Management</li>
                                        </ul>
                                    </div>

                                </div>
                            </motion.div>

                            <motion.div className="keycard-img"

                                initial={{ opacity: 0, x: 50 }}
                                transition={{ duration: 1,  delay: 1 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}


                            >
                                <img src={img1} alt=""></img>
                            </motion.div>
                        </div>
                        <div className="keycontent d-flex justify-content-evenly">
                            <motion.div className="keycard-img"
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1,  delay: 0.8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}

                            >
                                <img src={img2} alt=""></img>
                            </motion.div>

                            <motion.div className="maincontent"

                                initial={{ opacity: 0, x: 50 }}
                                transition={{ duration: 1,  delay: 1 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="card-title">OPD Management</h3>
                                <p className="card-text">
                                    Our OPD Management module simplifies the patient’s journey with easy registration and appointment scheduling. This software is integrated with lab and pharmacy systems for accurate prescription management. The online doctor appointment software also offers a communication management tool for enhanced patient-provider interactions. The advanced reporting and analytics can empower you to make informed decisions and optimise clinic operations flawlessly.</p>
                                <div className="d-flex justify-content-between">
                                    <ul className="text-start">
                                        <li>Patient Registration </li>
                                        <li>Appointment</li>
                                        <li>Doctor prescription</li>
                                    </ul>
                                    <ul className="text-start">
                                        <li>Integrated with Lab and Pharmacy </li>
                                        <li>Communication Management </li>
                                        <li>Report and Analytics</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="keycontent d-flex justify-content-evenly">
                            <motion.div className="maincontent"

                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1,  delay: 0.8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}



                            >
                                <h3 className="card-title">Diagnostic or Pathology Lab Management</h3>
                                <p className="card-text">Medicy offers a Diagnostic or Pathology Lab Management system that makes lab management easy. From patient registration to accurate billing and efficient payment management, our software can handle every operation without a single mistake. With features like Referral Payment Management and Vendor Payment Management, our diagnostic lab management software ensures smooth money transactions. Medicy empowers labs to focus on delivering quality diagnostics services for customer satisfaction.</p>
                                <div className="d-flex justify-content-between">
                                    <ul className="text-start">
                                        <li>Patient Registration </li>
                                        <li>Billing</li>
                                        <li>Payment Management</li>
                                    </ul><ul className="text-start">
                                        <li>Referral Payment Management</li>
                                        <li>Vendor Payment Management</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div className="keycard-img"

                                initial={{ opacity: 0, x: 50 }}
                                transition={{ duration: 1,  delay: 1 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}


                            >
                                <img src={img3} alt=""></img>
                            </motion.div>
                        </div>
                        <div className="keycontent d-flex justify-content-evenly">
                            <motion.div className="keycard-img" 

                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 1,  delay: 0.8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            
                            
                            
                            >
                                <img src={img4} alt=""></img>
                            </motion.div>
                            <motion.div className="maincontent"
                            
                               initial={{ opacity: 0, x: 50 }}
                                transition={{ duration: 1,  delay: 1 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            
                            
                            
                            >
                                <h3 className="card-title">Inventory Management Software</h3>
                                <p className="card-text">Our Inventory Management Software offers comprehensive control over purchases, stocks, and accounting processes. From efficient Purchase Management to careful Stock Management, it ensures an excellent inventory operation. With features for quality check and maintenance, product utilization management, and robust analytics and reports, our software solution can empower your business by enhancing productivity and profitability.</p>
                                <div className="d-flex justify-content-between">
                                    <ul className="text-start">
                                        <li>Purchase Management</li>
                                        <li>Stock Management</li>
                                        <li>Accounting</li>
                                    </ul>
                                    <ul className="text-start">
                                        <li>Quality Check and Maintenance</li>
                                        <li>Product Utilization Management</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="keycontent d-flex justify-content-evenly">
                            <motion.div className="maincontent"
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 1,  delay: 1 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            
                            
                            
                            >
                                <h3 className="card-title">GST Billing &amp; Return Filing</h3>
                                <p className="card-text">Medicy simplifies GST billing and return filing for healthcare providers with its comprehensive software suite. The platform allows healthcare providers to file returns easily with easy GST invoice generation. Medicy offers smooth-running tax management with accuracy. Our software solution allows providers to focus on delivering excellent patient services while minimizing administrative burdens.</p>
                            </motion.div>
                            <motion.div className="gst-img mt-4"
                            initial={{ opacity: 0, x: 50 }}
                            transition={{ duration: 1,  delay: 1 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} >
                                
                                <img src={img5} width="320" height="280" alt=""></img>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Featuresmain;