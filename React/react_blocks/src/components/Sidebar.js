import React, {Component} from 'react'

class Sidebar extends Component{
    render(){
        const thisStyle={
            width:'200px',
            backgroundColor: '#6fa8dc',
            height: '400px',
            marginRight:'10px',
        }
        return (
            <div style={thisStyle}></div>
        )
    }
}

export default Sidebar;