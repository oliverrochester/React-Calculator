import React, { Component } from 'react';
class Memory extends Component {
    state = {
        storage: null,
    }

    componentWillMount() {
        this.setState({
            storage: this.props.memory
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.storage}</h2>
            </div>
        );
    }
}

export default Memory;