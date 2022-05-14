import React from 'react';

const LandingCard = ({img, bgStyle, children}) => {
    return (
        <div className={`flex items-start py-[52px] px-[30px] text-white rounded-lg ${bgStyle}`}>
            <div className="mr-5">
                <img src={img} alt="" />
            </div>
            {children}
        </div>
    );
};

export default LandingCard;