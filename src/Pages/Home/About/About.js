import React from 'react';
import img from '../../../assets/photographer.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-white">

            <div className="hero-content flex-col lg:flex-row m-3 gap-10">

                <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h3 className='text-5xl font-bold p-2 text-green-600'>About Me</h3>
                    <h1 className="text-5xl font-bold">Hello,Hello, I am Eftekhar.
                        A Nature Photographer. </h1>
                    <p className="py-6"> My passion is to document the fleeting moments in nature to create timeless, beautiful images as memories. I love capturing landscapes, and also wildlife. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;