import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        fetch(`https://my-assignment-11-server-olive.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete this review');
        if(proceed){
            fetch(`https://my-assignment-11-server-olive.vercel.app/reviews/${id}`,{
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

     const handleUpdate = id => {
        fetch(`https://my-assignment-11-server-olive.vercel.app/reviews/${id}`, {
            method:'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({status : 'Approved'})

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0 ){
                const remaining = reviews.filter(rev => rev._id !== id);
                const approving = reviews.find(rev => rev._id == id);
                approving.status= 'Approved'

                const newReview = [approving,...remaining];
                setReviews(newReview);
            }
        })

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
                        <th>Services Reviews</th>
                        <th>Update</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    reviews.map( review => <ReviewRow
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        handleUpdate = {handleUpdate}
                    
                    ></ReviewRow>)
                }

                </tbody>

              

            </table>
        </div>
    </div>
    );
};

export default Reviews;