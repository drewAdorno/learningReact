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
    return (
    <div>
      <Form formState={formState} setFormState={setFormState}/>
      <DisplayForm formState={formState}/>
    </div>
  )
}

export default App;
