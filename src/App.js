import React from 'react';
import './App.css';
import Course from './component/Course/Course';
import Header from './component/Header/Header';
import './images/2.jpg';

function App() {
  return (
    <div className="app">
      <Header></Header>  {/*Header & Course is a child component of App.js */ }
      <Course></Course>
      
    </div>
  );
}

export default App;
