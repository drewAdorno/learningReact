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
            {Object.entries(formState).map(([key, value]) =>(
            <div style={inputInfoStyle}>
                <b style={labelStyle}>{key}</b>
                <p style={pStyle}>{value}</p>
            </div>
        ))}
        </div>
        
    )
}
export default DisplayForm;