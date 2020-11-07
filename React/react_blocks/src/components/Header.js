import React, {Component} from 'react'

class Header extends Component{
    render(){
        
        const somethingDifferent={
            backgroundColor:'#6aa84f',
            width:'100%',
            minHeight: '60px',
            marginBottom: '10px'
        }

        return(
            <div className='header' style={somethingDifferent}></div>
        )
    }
}

export default Header;