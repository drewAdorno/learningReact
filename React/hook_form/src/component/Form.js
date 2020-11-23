import React from 'react'

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

const errorStyle={
    color:'red'
}

const Form = (props) =>{
    
    const {formState, setFormState, error, setError}=props

    const validate = (e) =>{
        console.log(formState)
        
        
        if(e.target.id === 'firstName' || e.target.id === 'lastName'){
            if(e.target.value.length >=2){
                getInputValue(e)
            } 
            else{
                setError({
                    ...error,
                    [e.target.id]:`Should be at least 2 characters`
                })
            }
        }
        else if(e.target.id === 'email'){
            if(e.target.value.length >=5){
                getInputValue(e)
            }
            else{
                setError({
                    ...error,
                    [e.target.id]:`Email should be at least 5 characters`
                })
            }
        }
        else if(e.target.id === 'password'){
            if (e.target.value.length >=8){
                    getInputValue(e)
            }
            else{
                setError({
                    ...error,
                    [e.target.id]:`Password should be at least 8 characters`
                })
            }
        }
        else{
            if(formState.password !== e.target.value){
                 setError({
                    ...error,
                    [e.target.id]:`Password and Confirm PW should match`
                })
            }
            else{
                getInputValue(e)
            }
        }
    }

    const getInputValue = e =>{
        setError({
            ...error,
            [e.target.id]:''
        })
        setFormState({ 
            ...formState,
            [e.target.id]: e.target.value });
    }

    return(
        <div style={containerStyle}>
            <p style={errorStyle}>{error.firstName}</p>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="firstName">First Name</label>
                <input style={inputFieldStyle} type="text" id='firstName' onChange={validate}/>
            </div>
            <p style={errorStyle}>{error.lastName}</p>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="lastName">Last Name</label>
                <input style={inputFieldStyle} type="text" id='lastName' onChange={validate}/>
            </div>
            <p style={errorStyle}>{error.email}</p>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="email">Email</label>
                <input style={inputFieldStyle} type="text" id='email' onChange={validate}/>
            </div>
            <p style={errorStyle}>{error.password}</p>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="password">Password</label>
                <input style={inputFieldStyle} type="password" id='password' onChange={validate}/>
            </div>
            <p style={errorStyle}>{error.confirmPW}</p>
            <div style={inputDivStyle}>
                <label style={labelStyle} htmlFor="confirmPW">Confirm Password</label>
                <input style={inputFieldStyle} type="password" id='confirmPW' onChange={validate}/>
            </div>
        </div>
    )
        
    
}
export default Form