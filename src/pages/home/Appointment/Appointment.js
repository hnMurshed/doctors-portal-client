import React from 'react';
import ButtonPrimarySecondary from '../../shared/ButtonPrimarySecondary/ButtonPrimarySecondary';
import doctor from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png';

const appoinmentStyle = {
    backgroundImage: `url('${bg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const Appointment = () => {
    return (
        <div className="hero" style={appoinmentStyle}>
            <div className="hero-content flex-col lg:flex-row py-0">
                <img src={doctor} alt='' className="w-full mt-[-100px] hidden lg:block" />
                <div className='text-white'>
                    <h5 className='text-start capitalize text-secondary text-[20px] font-bold mb-4'>Appoinment</h5>
                    <h1 className="text-[48px] font-bold capitalize leading-[55px]">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 leading-[22px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimarySecondary>Get Started</ButtonPrimarySecondary>
                </div>
            </div>
        </div>
    );
};

export default Appointment;