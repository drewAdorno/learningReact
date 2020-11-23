import Form from './component/Form';
import DisplayForm from './component/DisplayForm';
import {useState} from 'react'

function App() {
    const [formState, setFormState]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPW:'',
    })
    const [error, setError]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPW:'',
    })
    return (
    <div>
      <Form formState={formState} setFormState={setFormState} error={error} setError={setError}/>
      <DisplayForm formState={formState} error={error}/>
    </div>
  )
}

export default App;
