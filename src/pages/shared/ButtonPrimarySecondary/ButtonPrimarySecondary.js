import React from 'react';

const ButtonPrimarySecondary = ({children}) => {
    return (
        <button className="btn bg-gradient-to-l hover:bg-gradient-to-r from-secondary to-primary text-white border-0">{children}</button>
    );
};

export default ButtonPrimarySecondary;