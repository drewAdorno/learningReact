import React from 'react'

const Results = ({form}) => 
{
    const display=(fieldName) => {
        let newName=''
        fieldName.split('').map((letter) => (
            letter === letter.toUpperCase() ? newName+=` ${letter}`:newName +=letter
        ))
        return newName.charAt(0).toUpperCase() + newName.slice(1)
    }
    return(
        <div id="results">
            {Object.keys(form).map((key) => (
               <p>{display(key)}: <span className='text-info'>{form[key]}</span></p>
            ))}
        </div>
    )
}
export default Results