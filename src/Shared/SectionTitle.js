import React from 'react';

const SectionTitle = ({content}) => {
    const {heads,title}=content
    return (
        <div className='font-jost text-center capitalize'>
            <span className='text-primary text-lg italic'>{heads}</span>
            <p className='text-5xl font-semibold pb-16 text-secondary '>{title}</p>
        </div>
    );
};

export default SectionTitle;