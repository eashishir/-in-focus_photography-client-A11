import React from 'react';
import img1 from '../../../assets/img 1.jpg'
import img2 from '../../../assets/img 2.jpg'
import img3 from '../../../assets/img3.webp'



const Banner = () => {
    return (

        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt='' className="w-full rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt='' className="w-full rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>




        </div>




    );
};

export default Banner;