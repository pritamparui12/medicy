import React, { useEffect, useState } from 'react';
import Slider from './slider'; // Import the Slide component
import './ImageSlider.css'; // Your custom styles
import img1 from '../assets/home-page-chemist.webp';
import img2 from '../assets/vitrun-banner.png';
import img3 from '../assets/vitrun_symbol.png';
import img4 from '../assets/new-feature-tag.png';
import img5 from '../assets/evital-app-qr.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
    {
        content: [
            <div className="box1">
                <div className="innerbox2">
                    <div className="headings">
                        <h2>India's Best<br></br> Pharmacy Software <br></br>at just ₹ 10/Day</h2>
                    </div>
                    <div className='paragraph'>
                        <p>Unlimited Multi-device logins.</p>
                        <p>Use on Desktop and App.</p>
                        <p> WhatsApp invoices, reminders and more.</p>
                    </div>


                    <div className="control">
                        <div className="btn">
                            <button className='btn btn-primary'> Learn More</button>
                            <button className='btn btn-outline-success'>Learn More</button>
                        </div>


                        <img src={img5} alt="" />
                    </div>

                </div>
                <div className="innerbox1">
                    <img src={img1} alt="Slide 1" />
                </div>





            </div>

        ],
    },
    {
        content: [
            <div className="box1">
                <div className="innerbox2">
                    <div className="imgs">
                        <img src={img4} alt="Slide 1" />
                        <img src={img3} alt="Slide 2" />
                    </div>
                    <div className="headings">
                        <h2>Delivery made easy</h2>
                    </div>
                    <div className='paragraph'>
                        <p>Unlimited Multi-device logins.</p>
                        <p>Use on Desktop and App.</p>
                        <p> WhatsApp invoices, reminders and more.</p>
                    </div>



                    <div className="control">
                        <div className="btn">
                            <button className='btn btn-outline-success'>Learn More</button>
                            <button>Learn More</button>
                        </div>


                        <img src={img5} alt="" />
                    </div>

                </div>
                <div className="innerbox1">
                    <img src={img2} alt="Slide 1" />
                </div>





            </div>
        ],
    },
    // Add more slides with different content
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []); // Run this effect every time currentIndex changes to avoid unnecessary re-renders

    return (
        <div className="image-slider">
            <Slider content={slides[currentIndex].content} />
            <div className="controls">
            <button onClick={nextSlide} className="prev"><ArrowBackIosIcon /></button>
            <button onClick={prevSlide} className="next"><ArrowForwardIosIcon/></button>
            </div>

        </div>
    );
};

export default ImageSlider;