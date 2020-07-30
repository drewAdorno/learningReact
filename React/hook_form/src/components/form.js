import React from 'react'

const Form = props => 
{
    const{form, setForm}= props
    const outputField = (e) =>
    {
        setForm({...form,  [e.target.id]: e.target.value })
    }
    return(
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
    )
}
export default Form