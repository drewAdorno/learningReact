import React,{Component} from 'react';
import CounterButton from './counterButton';


class PersonCard extends Component
{
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }
    handleClick = () => {
        this.setState({
            age: this.state.age + 1
        })
        
    }  
    render()
    {
        const {firstname, lastname, age, haircolor}=this.props;
        return (
        <div>
            <h1>{lastname}, {firstname} </h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {haircolor}</p>
            <CounterButton handleClick={this.handleClick} count={firstname}/>
        </div>
        
        );
    }
}

export default PersonCard;