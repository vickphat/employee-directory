import React from 'react';
import axios from 'axios';

const getEmployees = () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us") 
};
console.log(getEmployees)

const employeeTable = () => {
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Profile Image</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    )
}

export default employeeTable;