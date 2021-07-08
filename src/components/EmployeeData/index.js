import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import API from '../../utils/API'

class EmployeesData extends Component {

    state = {
        employees: [],
        filteredEmployees: [],
        sortDirections: this.startDirections,
    };

    get startDirections() {

        return {
            name: "",
            email: "",
            location: "",
            phone: "",
            age: "",

        };
    }

    // Load employees from "https://randomuser.me/api/?results=50&nat=us"
    componentDidMount() {

        API.getEmployees()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results,
                })
            )
            .catch((err) => console.log(err));
    }

    // Sort with the employee UUID 
    sortBy = (key, primary = 0, secondary = 0) => {

        let sortedEmployees = this.state.filteredEmployees;
        if (this.state.sortDirections[key]) {
            this.setState({
                filteredEmployees: sortedEmployees.reverse(),
                sortDirections: {
                    ...this.startDirections,
                    [key]: this.state.sortDirections[key] === "asc" ? "desc" : "asc",
                },
            });
        }
        else {
            sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
                a = a[key];
                b = b[key];

                // If first name is equal, then sort by last name. (vice-versa)
                if (primary) {
                    if (secondary && a[primary] === b[primary]) {
                        return a[secondary].localeCompare(b[secondary]);
                    }
                    return a[primary].localeCompare(b[primary]);
                } else {
                    return a.localeCompare(b);
                }
            });

            this.setState({
                filteredEmployees: sortedEmployees,
                sortDirections: {
                    ...this.startDirections,
                    [key]: "asc",
                },
            });
        }
    };

    filterEmployees = (input) => {
        if (input) {
            this.setState({
                filteredEmployees: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first
                            .toLowerCase()
                            .concat(" ", employee.name.last.toLowerCase())
                            .includes(input) ||
                        employee.phone.includes(input) ||
                        employee.phone.replace(/[^\w\s]/gi, "").includes(input) ||
                        employee.email.includes(input)
                    );
                }),
            });
        } else {
            this.setState({ filteredEmployees: this.state.employees });
        }
    };
    

    render() {
        return (
            <>
                <div className="container mt-4">
                    <EmployeeTable
                        state={this.state}
                        sortBy={this.sortBy}
                    />
                </div>
            </>
        );
    }
}

export default EmployeesData;