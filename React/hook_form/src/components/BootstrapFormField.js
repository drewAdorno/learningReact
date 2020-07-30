import React from 'react'

const BootstrapFormField=(props)=>
{
    const {fieldName,label,type, fn, errors}=props
    
    return(
        <div className="form-group">
            <div className='text-danger'>{errors}</div>
            <label htmlFor={fieldName}>{label||fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</label>
            <input type={type||'text'} className={errors.length>0 ? 'form-control red':'form-control'} name={fieldName} id={fieldName} onChange={fn}/>
        </div>
    )
}
export default BootstrapFormField