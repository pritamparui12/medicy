import React from "react";
import './features.css'
import svg1 from '../assets/icon/combo-chart.svg'
import svg2 from '../assets/icon/filter.svg'
import svg3 from '../assets/icon/patient-report.svg'
import svg4 from '../assets/icon/percentage.svg'
import svg5 from '../assets/icon/contacts.svg'
import svg6 from '../assets/icon/org-unit.svg'
import svg7 from '../assets/icon/search-icon.svg'
import svg8 from '../assets/icon/checklist.svg'
import svg9 from '../assets/icon/checked-user-male.svg'
import svg10 from '../assets/icon/more-details.svg'

const Features = () => {

    return (
        <>
        <div className="features loh">
        <div class="text-center pb-5 main-feat-head row">
                <div>
                    <h2 class="h1 sec-heading med-main-blue">Useful Features</h2>
                    <p class="pt-4">Designed for showcasing all manner of creative work in a truly modern, art-inspired &amp; animation-driven environment.</p>
                </div>
            </div>

            <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2 ">
                <div className="col">
                    <div className="card feat-card" >
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg1} alt=""></img>
                            </div>
                            <div className="feat-head">
                                Modern Charts</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card feat-card" >
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg2} alt=""></img>
                            </div>
                            <div className="feat-head">Easy Filtering</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card feat-card">
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg3} alt=""></img>
                            </div>
                            <div className="feat-head">Transection Report</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card feat-card" >
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg4} alt=""></img>
                            </div><div className="feat-head">GST Report</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card feat-card" >
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg5} alt=""></img>
                            </div>
                            <div className="feat-head">Listed Distributors</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card feat-card">
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg6} alt=""></img>
                            </div>
                            <div className="feat-head">Maximun Item Units</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card feat-card">
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg7} alt=""></img>
                            </div>
                            <div className="feat-head">Quick Search</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card feat-card">
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg8} alt=""></img>
                            </div>
                            <div className="feat-head">Expiry Monitor</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card feat-card" >
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg9} alt=""></img>
                            </div>
                            <div className="feat-head">Customer Monitor</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card feat-card" >
                        <div className="card-body feat-card-body">
                            <div className="pb-5 svgIcon">
                                <img src={svg10} alt=""></img>
                            </div>
                            <div className="feat-head">Product Monitor</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            
        </>
    )
}
export default Features


