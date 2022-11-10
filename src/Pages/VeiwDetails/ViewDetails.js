import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import userImg from '../../assets/user.jpg'
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, services, image_url, details, price, rating } = useLoaderData();


  const handlePlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
   
    const email = user?.email || 'unregistered';
   
    const message = form.message.value;
    

    const order = {
        service: _id,
        serviceName: services,
        userImg:user.photoURL,
        
        price,
       
        email,

        
       
        message


    }
    // if(phone.length > 10 ){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }



    fetch('http://localhost:5000/reviews', {
        method:'POST',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Order placed successfully')
            form.reset();
        }
    })
    .catch(error => console.error(error));

}



















  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold  text-green-600">{services}</h1>
            <p className="py-6">{details}</p>
            <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
            <p className='text-2xl font-bold mt-5 '>Rating:{rating}
              <div className="rating">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

              </div>
            </p>
          </div>
        </div>
      </div>



      <div className="card w-96 bg-base-100 shadow-xl text-center justify-end">
        <div className="card-body">

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
          <p>Our journey was friendly and courteous .Would definitely recommended  them both</p>
        </div>
      </div>





      <div>
        <p className='text-3xl font-bold my-5 text-center text-orange-600 '>Review section</p>
        <p className='text-1xl font-bold my-5 text-center text-green-600 '>Please Review This</p>

        <form onSubmit={handlePlaceOrder}>
          <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-2/3 " readOnly />


          <textarea name="message" className="textarea textarea-accent w-full p-5 mt-2 " placeholder="Your Message" required></textarea>
          {


            user?.uid ?

            <input type="submit" className="btn btn-primary mb-4  " value='Add your review' />
              :
              <>
                <Link className='font-semibold' to='/login'><button className="btn btn-outline btn-success mb-2">Before Login </button></Link>


              </>


          }
         
        </form>
      </div>



    </div>
  );
};

export default ViewDetails;