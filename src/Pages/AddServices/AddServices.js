import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);


    const handleAddedService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const details = form.details.value;
        console.log(name,photo,email,price,details)
        

        const addService = {
            
            serviceName:name,
            price,
            img:photo,
            
            email,
           
            details,


        }
     



        fetch('https://my-assignment-11-server-olive.vercel.app/addService', {
            method:'POST',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review added successfully')
                form.reset();
            }
        })
        .catch(error => console.error(error));

    }
    return (
        <div>

        <form onSubmit={handleAddedService} className='' >
            <h2 className='text-4xl font-bold text-center text-green-600'>Add Your Services Idea</h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 bg-black p-5'>
                <input name="name" type="text" placeholder="Service Name " className="input input-bordered w-full  " />
                <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered w-full " />
                <input name="price" type="text" placeholder="price" className="input input-bordered w-full " required />
                <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />


            </div>

            <textarea name="details" className="textarea textarea-accent w-full p-5 mt-2 " placeholder="Details" required></textarea>
            <input type="submit" className="btn mb-3 " value='Add Service' />
        </form>
    </div>
    );
};

export default  AddServices;