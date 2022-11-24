import React from 'react';

const Activity = ({activity}) => {

const {icon,title,description} = activity
   
    return (
        <div>
          <div className="flex items-start justify-center w-full mb-4 rounded-full font-jost">
            <div>
            <img src={icon} alt="" className='w-12 mr-5 '/>
            </div>
           <div>
          <h6 className="mb-2 font-semibold leading-5 text-secondary text-2xl">{title}</h6>
          <p className="mb-3 text-sm text-gray-900">
           {description}
          </p>
          </div>
          </div>
          
        </div>
    );
};

export default Activity;