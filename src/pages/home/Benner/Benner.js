import React from 'react';
import bennerBg from '../../../assets/images/bg.png';
import chairImg from '../../../assets/images/chair.png';

const bennerRootDivStyle = {
    backgroundImage: `url('${bennerBg}')`,
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat'
}

const Benner = () => {
    return (
        <div class="hero min-h-screen" style={bennerRootDivStyle}>
            <div class="hero-content flex-col lg:flex-row-reverse gap-12 custom-container">
                <img src={chairImg} class="max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 class="text-5xl font-bold capitalize">Your new smile starts here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-l hover:bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Benner;