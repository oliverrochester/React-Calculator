import React, { Component } from 'react';
class Display extends Component {
    state = {

    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        })
    }

    componentWillReceiveProps() {
        if (this.state.value !== this.props.value) {
            this.setState({
                value: this.props.value
            })
        }

    }

    render() {
        return (
            <div style={{
                height: "25vh",
                fontSize: "2vh",
                textAlign: "center",
                color: "white",

            }}>
                <h2>{this.props.value}</h2>
            </div>
        );
    }
}

export default Display;