import React, { useEffect, useState } from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.png'
import './carosal.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const Slider = () => {
    const [count,setcount]=useState(0);



    const data = [img1, img2, img3,img4];

    useEffect(()=>{
        const interval = setInterval(() => {
            setcount((count + 1) % data.length);
        }, 4000);
        return () => clearInterval(interval);

    }, );

    return (
        <>
            <div className="slider">
                <img src={data[count]} alt="nurse" />
                <div className="textbox">
                    <h1>Wellcome to Medicy</h1>
                    <p>Get premeum medicines at low price</p>
                    <div className="buttons">
                        <button className='btn btn-outline-success'>Free Demo</button>
                        <button className='btn btn-primary'>Buy NoW</button>
                    </div>
                </div>
                <div className="controls">
                    <button onClick={() => setcount((count + 1) % data.length)} className="prev"><ArrowBackIosIcon /></button>
                    <button onClick={()=>setcount((count - 1 + data.length) % data.length)} className="next"><ArrowForwardIosIcon/></button>
                 </div>
            </div>
        </>


    );
};

