import React, { useState } from 'react';
import './App.css';

function App() {
  const [studentInfo, setStudentInfo] = useState({
    name: 'Ragavi Venugopal',
    department: 'BE-CSE',
    year: '2021 - 2025',
    registerNumber: '73772114183',
    areaOfInterest: 'Design & Development',
  });

  return (
    <div className="App">
      <header className="App-header">
      <h1><b>Student Information</b></h1>
      <p><strong>Name:</strong> {studentInfo.name}</p>
      <p><strong>Department:</strong> {studentInfo.department}</p>
      <p><strong>Year:</strong> {studentInfo.year}</p>
      <p><strong>Register Number:</strong> {studentInfo.registerNumber}</p>
      <p><strong>Area of Interest:</strong> {studentInfo.areaOfInterest}</p>
  
      </header>
    </div>
  );
}

export default App;