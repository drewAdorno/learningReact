import React, {useState} from 'react'

const PersonCard =(props)=>{
    const {firstName, lastName, initAge, hairColor}=props
    
    // const [age,setAge]=useState(initAge)
    const [age,setAge]=useState(initAge)
    const birthday=()=>{
        setAge(age+1)
    }
    
    return (
    <div className='card'>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={birthday}>Birthday Button for {firstName} {lastName}</button>
        <button onClick={()=>{setAge(age-1)}}>UnBirthday</button>
    </div>
    )}

export default PersonCard



