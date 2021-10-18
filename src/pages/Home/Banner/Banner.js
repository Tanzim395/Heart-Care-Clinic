import { Carousel } from 'react-bootstrap';
import React from 'react';
import doc1 from '../../../images/TopBanner/doc-1.jpg'
import doc2 from '../../../images/TopBanner/doc-2.jpg'
import doc3 from '../../../images/TopBanner/doc-3.jpg'
import doc4 from '../../../images/TopBanner/doc-4.jpg'
import doc5 from '../../../images/TopBanner/doc-5.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark" className='mt-5'>
                <Carousel.Item>
                    <img
                        style={{ height: '730px' }}
                        className="d-block w-100 img-fluid"
                        src={doc1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>We are at your service</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '730px' }}
                        className="d-block w-100 img-fluid"
                        src={doc2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Our Doctors</h5>
                        <p>The most advanced quality ICU service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '730px' }}
                        className="d-block w-100 img-fluid"
                        src={doc3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Our Dedicated Service Door Always open to Serve You</h5>
                        <p>24/7 service Available at any Critical Case</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '730px' }}
                        className="d-block w-100 img-fluid"
                        src={doc4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Heart Checkup</h5>
                        <p>We Assure better health checkup at reasonable cost</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '730px' }}
                        className="d-block w-100 img-fluid"
                        src={doc5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Say No To Heart Problems</h5>
                        <p>24/7 service Available at any Critical Case</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;