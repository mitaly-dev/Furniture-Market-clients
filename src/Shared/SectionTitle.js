import React from 'react';

const SectionTitle = ({content}) => {
    const {heads,title}=content
    return (
        <div className='font-jost text-center '>
            <p className='text-primary text-lg italic mb-2'>{heads}</p>
            <p className='text-5xl font-semibold pb-16 text-secondary capitalize'>{title}</p>
        </div>
    );
};

export default SectionTitle;