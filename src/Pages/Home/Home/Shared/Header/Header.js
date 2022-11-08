import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../../assets/logo.png'
import userImg from '../../../../../assets/user.png'
import { AuthContext } from '../../../../../Context/AuthProvider.js/AuthProvider';

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const menuItems = <>
    <li><Link className='font-semibold' to='/'>Home</Link></li>
    <li><Link className='font-semibold' to='/'>Blog</Link></li>
    <li><Link className='font-semibold' to='/register'>Register</Link></li>







  </>
  return (
    <div className="navbar h-20 mb-12 pt-12     bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="text-dark menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case w-32 rounded text-xl"><img src={img} alt='' /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}

        </ul>
      </div>
      <div className="navbar-end">
        {


          user?.uid ?

            <button onClick={LogOut} className="btn btn-outline btn-error">Log Out</button>
            :
            <>
              <button className="btn btn-outline btn-success"><Link className='font-semibold' to='/login'>Login</Link> </button>

            </>


        }




        {user?.photoURL?

          <div className="w-16 rounded-full mx-10">
            <img className=' rounded-full' src={user.photoURL} alt='' />


          </div>


          : <div className="w-16 rounded-full mx-10">

            <img className='rounded-full' src={userImg} alt='' />
          </div>

        }

      </div>
    </div>
  );
};

export default Header;