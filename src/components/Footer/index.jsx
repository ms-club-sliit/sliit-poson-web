import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-3 flex items-center text-center bg-white py-10'>
                <div className='flex justify-center items-center px-4'>
                    <img className='w-20 h-auto' src='\assets\ms_club_logo.png' />
                </div>
                <div className='flex justify-center items-center px-4'>
                    Designed and Developed by MS Club of SLIIT
                </div>
                <div className='flex justify-center items-center px-4'>
                    SLIIT Interactive Media
                </div>
            </div>
        </>
    );
}

export default Footer;
