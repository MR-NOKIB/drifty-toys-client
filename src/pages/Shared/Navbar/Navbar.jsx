import React from 'react';
import logo from "../../../assets/images/logo/drifty-toys-logo-f.webp";
import { Link } from 'react-router-dom';
import ActiveLink from '../../../ActiveLink/ActiveLink';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><Link to="/all-toys">All Toys</Link></li>
                        <li><Link to="/my-toys">My Toys</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <Link to="/">
                    <img className='h-[35px] lg:h-[55px] bg-transparent rounded' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-[16px] font-semibold hover:bg-[#de3f74d7] hover:text-white rounded'><ActiveLink to="/">Home</ActiveLink></li>
                    <li className='text-[16px] font-semibold hover:bg-[#de3f74e5] hover:text-white rounded'><ActiveLink to="/all-toys">All Toys</ActiveLink></li>
                    <li className='text-[16px] font-semibold hover:bg-[#de3f74e5] hover:text-white rounded'><ActiveLink to="/my-toys">My Toys</ActiveLink></li>
                    <li className='text-[16px] font-semibold hover:bg-[#de3f74e5] hover:text-white rounded'><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='btn' to="/login">Login</Link>
                <Link className='btn' to="/register">Register</Link>
                <Link className='btn' to="/logout">Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;