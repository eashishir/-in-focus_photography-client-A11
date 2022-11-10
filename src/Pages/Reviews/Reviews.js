import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })
        }

     }

    return (
        <div>
        <h2 className='text-2xl text-green-600 text-center mb-4 font-bold'>You have {reviews.length} Reviews</h2>
      
        <div className=" overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Email</th>
                        <th>Services</th>
                        <th>Reviews</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    reviews.map( review => <ReviewRow
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    
                    ></ReviewRow>)
                }

                </tbody>

              

            </table>
        </div>
    </div>
    );
};

export default Reviews;