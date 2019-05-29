import React, { Component } from 'react';
class Button extends Component {
    state = {

    }
    componentWillMount() {
        this.setState({
            value: this.props.value,
            onClick: this.props.onclick
        })
    }
    render() {
        return (
            <button style={{
                width: "10vw",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "darkgray",
                outline: "0",
            }} onClick={(e) => {
                this.state.onClick(this.state.value)
            }} >
                {this.state.value}
            </button>
        );
    }

}

export default Button;