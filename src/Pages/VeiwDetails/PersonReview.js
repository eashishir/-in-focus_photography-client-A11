import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';

const PersonReview = ({review}) => {
    const { user } = useContext(AuthContext);
    const { _id,serviceName, price, message, userImg, service, email } = review;
    return (
        <div>
           <p className='text-2xl text-green-600'>what my clients saying about</p>
          <div className="rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-square btn-sm">
                
              <img className='rounded-full' src={userImg} alt='' />
            </button>
          </div>
          <p className=' text-orange-600'>User: {user.email}</p>
          <p className='font-bold'>{message}</p> 
        </div>
    );
};

export default PersonReview;