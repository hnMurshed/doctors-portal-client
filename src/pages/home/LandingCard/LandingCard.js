import React from 'react';

const LandingCard = ({children}) => {
    return (
        <div className='flex items-start py-[52px] px-[30px] bg-gradient-to-l from-primary to-secondary text-white rounded-lg'>
            {children}
        </div>
    );
};

export default LandingCard;