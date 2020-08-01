import React, { useState } from 'react'
import BootstrapFormField from './BootstrapFormField'

const Form = props => 
{
    const{form, setForm}= props
    const[errors, setErrors]=useState({
        'firstName':'',
        'lastName':'',
        'email':'',
        'password':'',
        'confirmPW':'',
    })

    const validator=(fieldName,fieldValue)=>{
        if(fieldName === 'firstName')
        {
            return fieldValue.length>=2 ? true : 'Field must be at least 2 characters'
        }
        else if(fieldName === 'lastName')
        {
            return fieldValue.length>=2 ? true : 'Field must be at least 2 characters'
        }
        else if(fieldName === 'email')
        {
            return fieldValue.length>=5 ? true : 'Field must be at least 5 characters'
        }
        else if(fieldName === 'password')
        {
            return fieldValue.length>=8 ? true : 'Field must be at least 8 characters'
        }
        else if(fieldName === 'confirmPW')
        {
            return form.password === fieldValue ? true :'Password and Confirm Password must match'
        }
    }

    const outputField = (e) =>
    {
        let isValid=validator(e.target.id, e.target.value) //call the validator will return back either true or the error message
        if(isValid===true)
        {
            setForm({...form,  [e.target.id]: e.target.value }) //input is valid, set result state equal to the field input
            setErrors({...errors, [e.target.id]: ''}) //since field is valid, set errors equal to nothing 
        }
        else
        {
            setErrors({...errors, [e.target.id]: isValid}) //input field is invalid, set error of corresponding field to the error message from the validator
            setForm({...form,  [e.target.id]: '' }) //because field is invalid, set result state equal to nothing
        }
    }
    
    return(
            <form autoComplete="off">
                <BootstrapFormField fieldName='firstName' label='First Name' fn={outputField} errors={errors.firstName} />
                <BootstrapFormField fieldName='lastName' label='Last Name' fn={outputField} errors={errors.lastName}/>
                <BootstrapFormField fieldName='email' fn={outputField} errors={errors.email}/>
                <BootstrapFormField type='password' fieldName='password' fn={outputField} errors={errors.password} />
                <BootstrapFormField type='password' fieldName='confirmPW' label='Confirm Password' fn={outputField} errors={errors.confirmPW}/>
            </form>
    )
}
export default Form