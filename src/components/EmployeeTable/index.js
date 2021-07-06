import React from 'react';

const EmployeeTable = (props) => {
    return (
        <table className="table table-striped table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col">Profile</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredEmployees.map((employee) => {

                    const { first, last } = employee.name;
                    const name = `${first} ${last}`;
                    const { city, state } = employee.location
                    const location = `${city}, ${state}`

                    console.log(employee);

                    return (
                        <tr key={employee.login.uuid}>
                            <td>
                                <img src={employee.picture.medium} alt={name} />
                            </td>
                            <td className="align-middle">{name}</td>
                            <td className="align-middle">
                                <a href={`mailto:${employee.email}`}>{employee.email}</a>
                            </td>
                            <td className="align-middle">
                                <span>{location}</span>
                            </td>
                            <td className="align-middle">
                                <span>{employee.phone}</span>
                            </td>
                            <td className="align-middle">
                                <span>{employee.dob.age}</span>
                            </td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default EmployeeTable;