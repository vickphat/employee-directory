import React from 'react';

const EmployeeTable = (props) => {
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
  {props.state.filteredEmployees.map((employee) => {
        
    console.log(employee);
    
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;