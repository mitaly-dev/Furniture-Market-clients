import React from 'react';
import { Link } from 'react-router-dom';

const SellerOption = () => {
    return (
        <>
         <li><Link>Add A product</Link></li>
         <li><Link>My Products</Link></li>
         <li><Link>My buyers</Link></li>
      </>
    );
};

export default SellerOption;