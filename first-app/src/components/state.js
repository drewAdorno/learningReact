import React from 'react';
import CounterButton from './counterButton'

class NewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
        console.log('clicked happy birthday')
    }
    render() {
        return (
            <div>
                <CounterButton handleClick={this.handleClick} count={this.state.clickCount}/>
            </div>
        )
    }
}
export default NewComponent;