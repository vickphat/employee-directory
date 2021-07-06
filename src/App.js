import React from 'react'
import Header from './components/Header';
import EmployeesData from './components/EmployeeData';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeesData />

    </div>
  );
}

export default App;
