import React from 'react';
import loader from "/public/Spinner.svg"

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-inherit'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loader;