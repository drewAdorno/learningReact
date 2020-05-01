import React,{Component} from 'react';

class HelloWord extends Component
{
    render(){
    return <h1>{this.props.someString}</h1>
    }
}

export default HelloWord;