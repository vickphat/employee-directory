import React from 'react';

const EmployeeTable = (props) => {
    return (
        <table className="table table-striped table-sortable text-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        {/* Sorts employees in alphabetical order by first name */}
                        <span onClick={() => props.sortBy("name", "first", "last")}>
                            Name
                        </span></th>
                    <th scope="col">Email</th>
                    <th scope="col">
                        {/* Sorts employees in alphabetical order by state */}
                    <span onClick={() => props.sortBy("location", "state", "city")}>
                            Location
                        </span>
                    </th>
                    <th scope="col">Phone</th>
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
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default EmployeeTable;