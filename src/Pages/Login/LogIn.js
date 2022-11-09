import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import img from '../../assets/login.jpg'
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';

const LogIn = () => {
    const {LogIn} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location =useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LogIn(email,password)
        .then(result => {
           const user = result.user;
           form.reset();
           console.log(user);
           navigate(from, {replace:true});

        })
    .catch(error => {
        console.error(error);
        setPasswordError(error.message);
    })
    }
    return (
        <div className="hero w-full my-20 bg-info text-black">
            <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-2/3 rounded' src={img} alt='' />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-orange-600 text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <p className='text-center font-bold text-red-600'>{passwordError}</p>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type='submit' value='Login' />

                        </div>
                    </form>
                    <p className='text-center font-bold text-green-600'>New to in:focus Photography? <Link className='text-orange-600 font-bold' to='/register'>Resister</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;