import React from 'react';
import error from '../../assets/oops-404-error.webp'

const ErrorPage = () => {
    return (
        <div className="card w-96 bg-base-100 m-10 mx-10  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">ERROR!</h2>
                <p>  The page you were trying to reach on a website couldn't be found on their server.</p>
            </div>
            <figure><img src={error} alt="Shoes" /></figure>
        </div>
    );
};

export default ErrorPage;