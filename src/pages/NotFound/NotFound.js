import React from 'react';
import { NavLink } from 'react-router-dom';
import err from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='mt-5'>
            <img className='img-fluid' src={err} alt="" />
            <br />
            <NavLink to='/home'>
                <button className='mt-4 bg-primary rounded fs-4 border border-white text-white'>
                    Go Back
                </button>
            </NavLink>
        </div>
    );
};

export default NotFound;