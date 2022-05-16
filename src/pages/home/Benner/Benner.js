import React from 'react';
import bennerBg from '../../../assets/images/bg.png';
import chairImg from '../../../assets/images/chair.png';

const bennerRootDivStyle = {
    backgroundImage: `url('${bennerBg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const Benner = ({ children }) => {
    return (
        <section className="hero py-20 lg:py-0 lg:min-h-screen" style={bennerRootDivStyle}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 custom-container">
                <div className="flex-1">
                    <img src={chairImg} className="md:max-w-lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Benner;