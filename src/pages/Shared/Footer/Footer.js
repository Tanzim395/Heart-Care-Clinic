import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "Emergency", link: "/emergency" },
        { name: "Heart Checkup Package", link: "/checkup" },
        { name: "Day Camp", link: "/personal-treatment" },
        { name: "Heart Surgery", link: "/tooth-extract" },
        { name: "Telemedicine", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "Tejgaon, Dhaka-1200", link: "https://www.google.com/maps/place/Dhaka+Imperial+Hospital/@23.1324502,89.962106,8z/data=!4m9!1m2!2m1!1simperial+hospital+google+map!3m5!1s0x3755c4f31b57a89b:0xfbff36f5ad472eab!8m2!3d23.9136248!4d90.3954488!15sChxpbXBlcmlhbCBob3NwaXRhbCBnb29nbGUgbWFwIgOIAQGSAQhob3NwaXRhbA" },
        { name: "Bangladesh", link: "https://www.google.com/maps/place/Dhaka+Imperial+Hospital/@23.1324502,89.962106,8z/data=!4m9!1m2!2m1!1simperial+hospital+google+map!3m5!1s0x3755c4f31b57a89b:0xfbff36f5ad472eab!8m2!3d23.9136248!4d90.3954488!15sChxpbXBlcmlhbCBob3NwaXRhbCBnb29nbGUgbWFwIgOIAQGSAQhob3NwaXRhbA" },

    ]
    const oralHealth = [
        { name: "Emergency Surgery Unit", link: "/emergency" },
        { name: "Heart Check", link: "/checkup" },
        { name: "Pediatric Cardiovascular", link: "/personal-treatment" },
        { name: "Heart Care We Care", link: "/tooth-extract" }
    ]
    const services = [
        { name: "News Latter", link: "/emergency" },
        { name: "Heart Treatment", link: "/checkup" },
        { name: "Cardiac Surgeons" },
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container p-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Divisions"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Addition" menuItems={services} />
                    <FooterCol key={3} menuTitle="Heart Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Contact Us" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/ihlbd.org/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-primary">Call now</h6>
                            <button className="btn btn-primary">+88065050</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="text-white"><small>Copyright © 2021 All Rights Reserved</small></p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;