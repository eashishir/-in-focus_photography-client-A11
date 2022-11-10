import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useTitle('All Services')

    useEffect(() => {
        fetch('https://my-assignment-11-server-olive.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-green-600'>All Services</p>
                <h2 className='text-4xl font-bold  text-red-600 '>MY Service Area</h2>
                <p className='text-1xl font-bold text-black p-2'>The best for every budget. Find high-quality services at every price point. No hourly rates, just project-based pricing</p>

            </div>
          

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    allServices.map(allService => <AllServicesCard
                        key={allService._id}
                        allService={allService}
                    ></AllServicesCard>)
                }
            </div>
            
        </div>
        
    );
};

export default AllServices;