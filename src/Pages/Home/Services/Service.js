import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Service = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-green-600'>Services</p>
                <h2 className='text-4xl font-bold  text-red-600 '>MY Service Area</h2>
                <p className='text-1xl font-bold text-black p-2'>The best for every budget. Find high-quality services at every price point. No hourly rates, just project-based pricing</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    Services.map(service => <ServicesCard
                        key={service._id}
                        service={service}

                    ></ServicesCard>)
                }
            </div>
            <div className="card-actions justify-center">


                <Link to='/services'> <button className="btn btn-active btn-primary">Sea All Services</button></Link>
            </div>
        </div>
    );
};

export default Service;