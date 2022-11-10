import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review ,handleDelete,handleUpdate}) => {
    const { _id,serviceName, price, message, userImg, service, email,status } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://my-assignment-11-server-olive.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [service])

   



    return (
        <tr className='' >
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-error rounded'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {reviewService?.image_url &&
                            <img src={reviewService.image_url} alt="Avatar Tailwind CSS Component" />
                        }
                        </div>
                    </div>
                    <div>
                        <div className="text-black font-bold">{email}</div>
                        <div className="text-sm opacity-50">{ }</div>
                    </div>
                </div>
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm">{serviceName}</span>
                <div className="text-sm opacity-50">${price}</div>
                <p>{message}</p>
            </td>

            <th>
              
                <button
                onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;