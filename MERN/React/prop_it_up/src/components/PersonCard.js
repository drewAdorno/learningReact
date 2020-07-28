import React, {Component} from 'react'

class PersonCard extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            birthday: parseInt(this.props.age)
        };
    }
    render(){
        const {firstName, lastName, hairColor}= this.props
        const birthday=() =>
        {
            this.setState({birthday:this.state.birthday+1})
        }
        return(
            
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.birthday}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={birthday}>Birthday Button for {firstName} {lastName}</button> 
            </div>
           
        );
    }
}
export default PersonCard