import React from 'react'
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import API from '../src/utils/API';



function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeTable />
      
    </div>
  );
}

export default App;
