import React from 'react';
import img from '../../../assets/images/treatment.png';
import ButtonPrimarySecondary from '../../shared/ButtonPrimarySecondary/ButtonPrimarySecondary';

const Exceptional = () => {
    return (
        <div className="hero custom-container md:px-16 pb-20 lg:pb-[180px]">
            <div className="hero-content flex-col lg:flex-row gap-y-9 gap-x-24">
                <img src={img} alt='' className="md:max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-[48px] font-bold capitalize text-accent leading-[55px]">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-[#000000] leading-[22px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimarySecondary>Get Started</ButtonPrimarySecondary>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;