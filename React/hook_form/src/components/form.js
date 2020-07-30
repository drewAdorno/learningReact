import React, { useState} from 'react'

const Form = () => 
{
    const [form, setForm]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPW:'',
    })
    const outputField = (e) =>
    {
        setForm({...form,  [e.target.id]: e.target.value })
    }
    return(
        <div>
            <form>
                <h1>My First React Form</h1>
                <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" name="firstName" id="firstName" onChange={outputField}/>
                </div>

                <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" name="lastName" id="lastName" onChange={outputField}/>
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" id="email" onChange={outputField}/>
                </div>

                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={outputField}/>
                </div>

                <div className="form-group">
                <label htmlFor="confirmPW">Confirm Password</label>
                <input type="password" className="form-control" name="confirmPW" id="confirmPW" onChange={outputField}/>
                </div>
            </form>
            <div id="results">
                <p>First Name: <span className='text-info'>{form.firstName}</span></p>
                <p>Last Name: <span className='text-info'>{form.lastName}</span></p>
                <p>Email: <span className='text-info'>{form.email}</span></p>
                <p>Password: <span className='text-info'>{form.password}</span></p>
                <p>Confirm PW: <span className='text-info'>{form.confirmPW}</span></p>
            </div>
        </div>
    )
}
export default Form