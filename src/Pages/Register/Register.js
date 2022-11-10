import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/user.jpg'
import gIcon from '../../assets/google.jpg'
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';



const Register = () => {
    const { createUser, googleProviderLogin } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location =useLocation();
    useTitle('Register');

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password, name)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.error(error);

                setPasswordError(error.message)
            });


    };

    const googleHandleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace:true});

            })
            .catch(error => console.error(error))

    };

    return (
        <div className="hero w-full my-20 bg-green-600 text-black ">
            <div className="hero-content gap-5 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-2/3 rounded' src={img} alt='' />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100 ">
                    <h1 className="text-5xl text-orange-600 text-center font-bold">Register</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type='submit' value='Sign UP' />

                        </div>
                        <p className='text-center font-bold text-red-600'>{passwordError}</p>
                    </form>

                    <p className='text-center font-bold text-green-600 p-2'>Already have an account ? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    <hr />

                    <p className='text-center font-bold text-orange-600 p-2'> Or Register With Google</p>
                    <div className="w-16 rounded-full mx-10">

                        <button onClick={googleHandleSignIn } ><img className='rounded-full' src={gIcon} alt='' /></button>
                    </div>
                    
                    

                </div>
            </div>
            
        </div>
    );
};

export default Register;