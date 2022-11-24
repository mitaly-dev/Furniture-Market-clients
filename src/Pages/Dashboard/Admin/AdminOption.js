import React from 'react';
import { Link } from 'react-router-dom';

const AdminOption = () => {
    return (
        <>
        <li><Link>All Sellers</Link></li>
        <li><Link>All Buyers</Link></li>
        <li><Link>Reported Items</Link></li>
        </>
    );
};

export default AdminOption;