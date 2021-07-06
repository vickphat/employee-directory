import React from 'react';

const EmployeeTable = (props) => {
    return (
        <table className="table table-striped table-sortable text-center">
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

          const { first, last } = employee.name;
          const name = `${first} ${last}`;
        
          console.log(employee);
    
    return (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.medium} alt={name} />
              </td>
              <td className="align-middle">{name}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;