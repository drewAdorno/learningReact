import React, { useState } from 'react'

const InputField = ({box, setBox}) =>
{
    const [color, setColor]=useState('')
    const getColor= (e) =>{setColor(e.target.value)}
    const createBox = (e) =>
    {
        e.preventDefault()
        setBox({colors: [...box.colors, color],})
        e.target.reset()
    }
    return(
        <form onSubmit={createBox}>
            <div className="row">
                <div className="col">
                    <div className='form-group'>
                        <input type="text" id='color' className='form-control' placeholder='color' onChange={getColor}/>
                    </div>
                </div>
                <div className="col">
                    <button className='btn btn-primary'>Add</button>
                </div>
            </div>
            
        </form>
    )
}
export default InputField