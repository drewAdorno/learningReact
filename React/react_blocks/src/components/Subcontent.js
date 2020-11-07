import React, {Component} from 'react'

class Subcontent extends Component{
    render(){
        const {location}=this.props
        const thisStyle={
            backgroundColor:'#ffd966',
            flex:'1',
            height: '500px',
        }
        if (location === 'middle'){
            thisStyle['margin']='0px 10px'
        }
        return(
            <div style={thisStyle}></div>
        )
    }
}
export default Subcontent