import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {image_url, price, services,_id } = service;
    return (
        <div className="card w-96 bg-white text-black p-3 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-green-600">
                   {services}
                    
                </h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    
               
               <Link to= '/services'> <button className="btn btn-outline btn-error">Sea All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;