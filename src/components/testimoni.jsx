import React from "react";
import './testimoni.css';
import icon from '../assets/scs.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const data = [
    {
        review: 'The integration of Medicy.in into our practice was seamless. The software is incredibly user-friendly and has helped us streamline our medication management processes. Our patients appreciate the timely reminders and clear instructions, which have improved adherence rates.',
        author: 'Dr. John Doe'

    },
    {
        review: 'The integration of Medicy.in into our practice was seamless. The software is incredibly user-friendly and has helped us streamline our medication management processes. Our patients appreciate the timely reminders and clear instructions, which have improved adherence rates.',
        author: 'Dr. John Doe'

    },
    {
        review: 'The integration of Medicy.in into our practice was seamless. The software is incredibly user-friendly and has helped us streamline our medication management processes. Our patients appreciate the timely reminders and clear instructions, which have improved adherence rates.',
        author: 'Dr. John Doe'

    },
    {
        review: 'The integration of Medicy.in into our practice was seamless. The software is incredibly user-friendly and has helped us streamline our medication management processes. Our patients appreciate the timely reminders and clear instructions, which have improved adherence rates.',
        author: 'Dr. John Doe'

    },
    {
        review: 'The integration of Medicy.in into our practice was seamless. The software is incredibly user-friendly and has helped us streamline our medication management processes. Our patients appreciate the timely reminders and clear instructions, which have improved adherence rates.',
        author: 'Dr. John Doe'

    }
]


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group crossarrow ">
        <button className={currentSlide === 0 ? 'disable crossarrow' : 'crossarrow'} onClick={() => previous()}>prev</button>
        <button className="crossarrow" onClick={() => next()} >next</button>
      </div>
    );
  };
  

const Testimonial = () => {
    return (
        <>
        <div class="text-center pharmaciesTag">
            <h1>What Our Client Says</h1>
            </div>
            <div className="cards">
                <Carousel infinite={true}
                 arrows={true}
                 responsive={responsive}

                >


                    {
                        data.map((item, index) => (
                            <div key={index} className="contentdiv">
                                <div class="testimonial-img">
                                    <img src={icon} alt="">
                                    </img>
                                </div>
                                <div class=" author fw-bold">{item.review}
                                    <p>~ {item.author}</p>
                                </div>
                            </div>
                        ))
                    }



                </Carousel>
            </div>;

        </>
    )
}
export default Testimonial;