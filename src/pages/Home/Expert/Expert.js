import React from 'react';
import { Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img, speciality } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <Col className='shadow-none mb-4 img-fluid'><img style={{ width: "180px", height: '180px', borderRadius: '10px' }} src={img} alt="" /></Col>
            <h3>{name}</h3>
            <h5 className="text-danger">{speciality}</h5>
        </div>
    );
};

export default Expert;