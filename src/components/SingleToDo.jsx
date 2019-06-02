import React, { Component } from 'react';

class SingleToDo extends Component {
    state = {
        isClicked: false,
    }

    handleOnClick = () => {
        this.setState({isClicked: !this.state.isClicked});
    };

    render() { 
        return (
            <li onClick={this.handleOnClick} 
                style={{textDecoration: this.state.isClicked ? 'line-through' : 'none',
                        opacity: this.state.isClicked ? '0.3' : '1'
                        }}>
                {this.props.task}
            <a className="close" onClick={this.props.delete} /></li>
          );
    }
}
export default SingleToDo;