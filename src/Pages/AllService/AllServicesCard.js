import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';





const AllServicesCard = ({ allService }) => {
    const { image_url, price, services, _id, details, rating } = allService;
    return (
        <div className="card w-96 bg-white text-black p-3 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image_url} >
                        <img src={image_url} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body p-2">
                <h2 className="card-title font-bold text-green-600">
                    {services}

                </h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>{details.length >= 100 ?
                    `${details.slice(0, 100)} ...`
                    : details
                }</p>
                <div className="card-actions justify-end">
                    <p className='text-2xl font-bold '>Rating:{rating}
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

                        </div>
                    </p>
                    

                    <Link to={`/details/${_id}`}> <button className="btn btn-outline btn-error">View details</button></Link>
                </div>
               
            </div>

        </div>
    );
};

export default AllServicesCard;