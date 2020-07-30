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
        <Form form={form} setForm={setForm}/>
        <Results form={form}/>
    </div>
  );
}

export default App;
