import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import Box from './components/Box';

function App() {
  const [box, setBox]=useState({colors:[]})
  return (
   <div className="container">
       <InputField box={box} setBox={setBox}/>
       {box.colors.map((color) => (
           <Box color={color}/>
       ))} 
   </div>
  );
}

export default App;
