import React from 'react';

const AllSellers = () => {
    return (
        <div className="overflow-x-auto px-14">
        <table className="table rounded-lg w-full border-2 border-primary">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default AllSellers;