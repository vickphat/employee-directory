import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import API from '../../utils/API'

class EmployeesData extends Component {

    state = {
        
        search: "",
        employees: [],
        filteredEmployees: [],
        sortDirections: this.sortDirections,
    };

    get sortDirections() {

        return {
            name: "",
            email: "",
            location: "",
            phone: "",
            age: "",
            delete: ""
            
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

    handleFormSubmit = (event) => {
        event.preventDefault();
    };

    // Sort with the employee UUID 
    sortBy = (key, primary = 0, secondary = 0) => {

        let sortedEmployees = this.state.filteredEmployees;
        if (this.state.sortDirections[key]) {
            this.setState({
                filteredEmployees: sortedEmployees.reverse(),
                sortDirections: {
                    ...this.sortDirections,
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
                    ...this.sortDirections,
                    [key]: "asc",
                },
            });
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