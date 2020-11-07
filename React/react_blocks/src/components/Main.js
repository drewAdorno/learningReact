import React, {Component} from 'react'

class Main extends Component{
    render(){
        const thisStyle={
            backgroundColor:'#e06666',
            width:'100%',
            padding:'10px',
            minHeight: '400px',
            display:'flex',
            flexWrap: 'wrap',
            justifyContent:'space-between',
        }
        return(
            <div style={thisStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Main