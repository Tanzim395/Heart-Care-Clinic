import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProcedures } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
const Services = () => {
    const [services, setServices] = useServices();
    const elementIcon = <FontAwesomeIcon icon={faProcedures} />
    return (
        <Container id='services' className='mt-5 mb-5'>
            <h1 className='text-secondary mb-3 '>Our Services {elementIcon} </h1>
            <hr />
            <Row id='services' className='row' xs={1} md={3} lg={3} className="gy-4 gx-5" >
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </Row>
        </Container>
    );
};

export default Services;