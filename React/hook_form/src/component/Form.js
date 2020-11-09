import React, {useState} from 'react'

const containerStyle={
    width:'50%',
    minWidth:'350px',
    margin:'0 auto',
    padding:'10px 0'
}
const labelStyle={
    minWidth: '140px',
    textAlign:'right',
    marginRight:'10px'
}
const inputDivStyle={
    display:'flex',
    alignItems:'center',
    marginTop:'10px'
}
const inputFieldStyle={
    width:'100%',
}

const Form = (props) =>{
    
    const {formState, setFormState}=props

    const getInputValue = e =>{
        setFormState({ 
            ...formState,
            [e.target.id]: e.target.value });
    }

    return(
        <div style={containerStyle}>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="firstName">First Name</label>
                <input style={inputFieldStyle} type="text" id='firstName' onChange={getInputValue}/>
            </div>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="lastName">Last Name</label>
                <input style={inputFieldStyle} type="text" id='lastName' onChange={getInputValue}/>
            </div>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="email">Email</label>
                <input style={inputFieldStyle} type="text" id='email' onChange={getInputValue}/>
            </div>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="password">Password</label>
                <input style={inputFieldStyle} type="password" id='password' onChange={getInputValue}/>
            </div>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="confirmPW">Confirm Password</label>
                <input style={inputFieldStyle} type="password" id='confirmPW' onChange={getInputValue}/>
            </div>
        </div>
    )
        
    
}
export default Form