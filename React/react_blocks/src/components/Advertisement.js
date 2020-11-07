import React, {Component} from 'react'

class Advertisement extends Component{
    render(){
        const thisStyle={
            backgroundColor: '#b4a7d6',
            width:'100%',
            marginTop:'10px',
            minHeight:'80px',
        }
        return (
            <div style={thisStyle}></div>
        )
    }
}

export default Advertisement;