import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './Ticker.css';


const Ticker = () => {
    const elementIcon = <FontAwesomeIcon icon={faBullhorn} />
    return (
        <div>

            <section>
                <div >
                    <h3 className="text-primary" style={{ margin: "20px", padding: "20px", fontSize: "40px" }}>Welcome To Heart Care Clinic</h3>
                    <h5 style={{ color: "red", margin: "20px", padding: "20px", fontSize: "40px" }}>Announcement {elementIcon} !!! </h5>
                </div>
                <div class="marquee">
                    <p>Welcome to The Cardiology Department of Heart-Care-Clinic, Dhaka.reputation for its dynamic and innovation in the diagnosis, investigation and treatment of patients with all forms of heart diseases, both generally encountered and complex cases. We have a dedicated unit of four full-time Consultants, and a team of junior doctors, nurses, and technicians trained to the highest standard in cardiac assessment. Our specialists diagnose and manage full range of heart conditions, and we are fully equipped with state-of-the-art facilities and complete range of services – from cardiac investigations to Interventional Cardiology procedures in ultramodern Catheterization Lab (Cath Lab). Cardio-pulmonary rehabilitation program is offered to patients through our Physical Medicine  Rehabilitation Centre. The hospital offers a multidisciplinary in-patient program, and also has complete Coronary Care Unit and Cardiothoracic ICU for critical cardiac patients. For emergency patients, we have 24-hour Accident Emergency Centre and specialized team for stabilization and treatment of the patient.</p>
                </div>
            </section>

        </div>
    );
};

export default Ticker;