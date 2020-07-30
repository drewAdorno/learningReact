import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Results from './components/Results'


function App() {
    const [form, setForm]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPW:'',
    })
  return (
    <div className='container'>
        <h1>My First React Form</h1>
        <Form form={form} setForm={setForm}/>
        <Results form={form}/>
    </div>
  );
}

export default App;
