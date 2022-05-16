import React from 'react';
import bennerBg from '../../../assets/images/bg.png';
import chairImg from '../../../assets/images/chair.png';
import ButtonPrimarySecondary from '../../shared/ButtonPrimarySecondary/ButtonPrimarySecondary';

const bennerRootDivStyle = {
    backgroundImage: `url('${bennerBg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const Benner = () => {
    return (
        <div className="hero py-20 lg:py-0 lg:min-h-screen" style={bennerRootDivStyle}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-12 custom-container">
                <img src={chairImg} className="md:max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold capitalize">Your new smile starts here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimarySecondary>Get Started</ButtonPrimarySecondary>
                </div>
            </div>
        </div>
    );
};

export default Benner;