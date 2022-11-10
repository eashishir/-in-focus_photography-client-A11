import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { image_url, price, services, _id } = service;
    return (
        <div>
            <div className="card w-96 bg-white text-black p-3 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-green-600">
                        {services}

                    </h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">


                    <Link to={`/details/${_id}`}> <button className="btn btn-outline btn-error">View details</button></Link>
                    </div>

                </div>

            </div>

            

        </div>

    );
};

export default ServicesCard;