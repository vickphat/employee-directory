import React from 'react';
import './style.css'

const EmployeeTable = (props) => {
    return (
        <table className="table table-striped table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        {/* Sorts employees in alphabetical order by first name */}
                        <span onClick={() => props.sortBy("name", "first", "last")}>
                            Name <i className="bi bi-filter sort icon"></i>
                        </span></th>
                    <th scope="col">Email</th>
                    <th scope="col">
                        {/* Sorts employees in alphabetical order by state */}
                    <span onClick={() => props.sortBy("location", "state", "city")}>
                            Location <i className="bi bi-filter sort icon"></i>
                        </span>
                    </th>
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

                    // console.log(employee);

                    return (
                        <tr key={employee.login.uuid}>
                            <td>
                                <img src={employee.picture.large} alt={name} />
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