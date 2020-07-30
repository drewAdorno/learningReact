import React from 'react'

const Results = props => 
{
    const {form}=props
    return(
        <div id="results">
            <p>First Name: <span className='text-info'>{form.firstName}</span></p>
            <p>Last Name: <span className='text-info'>{form.lastName}</span></p>
            <p>Email: <span className='text-info'>{form.email}</span></p>
            <p>Password: <span className='text-info'>{form.password}</span></p>
            <p>Confirm PW: <span className='text-info'>{form.confirmPW}</span></p>
        </div>
    )
}
export default Results