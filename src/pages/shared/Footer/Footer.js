import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../assets/images/footer.png';

const footerStyle = {
    backgroundImage: `url('${footerBg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const Footer = () => {
    return (
        <div style={footerStyle} className='pt-[74px] pb-11'>
            <div className='flex items-start justify-between gap-5 custom-container text-accent'>
                <div className="flex flex-col gap-3">
                    <h5 className="font-[18px] uppercase text-[#939393] font-bold mb-2">Services</h5>
                    <Link to=''>Emergency Checkup</Link>
                    <Link to=''>Monthly Checkup</Link>
                    <Link to=''>Weekly Checkup</Link>
                    <Link to=''>Deep Checkup</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h5 className="font-[18px] uppercase text-[#939393] font-bold mb-2">Oral Healt</h5>
                    <Link to=''>Fluoride Treatment</Link>
                    <Link to=''>Cavity Filling</Link>
                    <Link to=''>Teeth Whitening</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h5 className="font-[18px] uppercase text-[#939393] font-bold mb-2">Our Address</h5>
                    <span>New York - 101010 Hudson</span>
                </div>
            </div>
            <p className='text-center capitalize mt-28'>Copywright {new Date().getFullYear()} All Right Reserved</p>
        </div>
    );
};

export default Footer;