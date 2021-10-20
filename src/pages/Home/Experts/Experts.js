import React from 'react';

import docexp1 from '../../../images/surgeons/doc-1.jpg';
import docexp2 from '../../../images/surgeons/doc-2.jpg';
import docexp3 from '../../../images/surgeons/doc-3.jpg';
import docexp4 from '../../../images/surgeons/doc-4.jpg';
import docexp5 from '../../../images/surgeons/doc-5.jpg';
import docexp6 from '../../../images/surgeons/doc-6.jpeg';
import docexp7 from '../../../images/surgeons/doc-7.jpg';
import docexp8 from '../../../images/surgeons/doc-8.jpg';
import docexp9 from '../../../images/surgeons/doc-9.jpg';

import Expert from '../Expert/Expert';

const experts = [
    {
        img: docexp1,
        name: 'Dr. Evan M Jahn',
        speciality: 'Pediatric Cardiologist'
    },
    {
        img: docexp2,
        name: 'Dr. Ali Azizzadeh',
        speciality: 'Prof. & Director in VS'
    },
    {
        img: docexp3,
        name: 'Dr. Iygnar',
        speciality: 'Cardiothoracic Surgeon'
    },
    {
        img: docexp4,
        name: 'Dr. Sandip Attawar',
        speciality: 'Cardiac Surgeon'
    },
    {
        img: docexp5,
        name: 'Dr. Ashok Sheth',
        speciality: 'Interventional Cardiologist'
    },
    {
        img: docexp6,
        name: 'Dr. Naresh Tehran',
        speciality: 'Sr Cardiac Surgeon'
    },
    {
        img: docexp7,
        name: 'Dr. Devi Shetty',
        speciality: 'Sr. Cardiologist'
    },
    {
        img: docexp8,
        name: 'Dr. Rajendra Makkar',
        speciality: 'IM Cardiology'
    },
    {
        img: docexp9,
        name: 'Dr. Rishi Gupta',
        speciality: 'IM Cardiology'
    }

]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Expert <span className="text-danger">Surgeons</span></h2>
            <hr />
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;