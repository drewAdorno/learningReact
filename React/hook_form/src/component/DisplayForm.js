import React, {useState} from 'react'

const inputInfoStyle={
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const containerStyle={
    width:'50%',
    minWidth:'350px',
    margin:'0 auto',
    textAlign:'center',
}

const labelStyle={
    flex:'1',
    textAlign:'right',
    paddingRight:'5px'
}

const pStyle={
    flex:'1',
    textAlign:'left',
    paddingLeft:'5px'
}

const DisplayForm= (props) =>{

    const {formState}=props

    return(
        <div style={containerStyle}>
            <h3>Your Form Data</h3>
            <div style={inputInfoStyle}>
                <b style={labelStyle}>First Name:</b>
                <p style={pStyle}>{formState.firstName}</p>
            </div>
            <div style={inputInfoStyle}>
                <b style={labelStyle}>Last Name:</b>
                <p style={pStyle}>{formState.lastName}</p>
            </div>
            <div style={inputInfoStyle}>
                <b style={labelStyle}>Email:</b>
                <p style={pStyle}>{formState.email}</p>
            </div>
            <div style={inputInfoStyle}>
                <b style={labelStyle}>Password:</b>
                <p style={pStyle}>{formState.password}</p>
            </div>
            <div style={inputInfoStyle}>
                <b style={labelStyle}>Confirm Password:</b>
                <p style={pStyle}>{formState.confirmPW}</p>
            </div>
        </div>
    )
}
export default DisplayForm;