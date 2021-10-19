import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="servicecard rounded ">
            <Col className='shadow-none mb-4 img-fluid'> <img style={{ width: "350px", height: '200px', borderRadius: '10px' }} src={img} alt="" /></Col>
            <Col ><h4>{name}</h4></Col>
            <Col><small>{description}</small></Col>

            <NavLink to={`detail/${id}`}>
                <Col><button className='mt-3 rounded bg-danger text-white border border-white fs-5'>View More</button></Col>
            </NavLink>
        </div>
    );
};

export default Service;