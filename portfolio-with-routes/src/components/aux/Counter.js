import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
        console.log('I am in the CONSTRUCTOR of the Counter.js.')
    }

    counter = () => this.setState({ count: this.state.count + 1 })

    componentDidMount() {
        this.timer = setInterval(this.counter, 100);
        console.log('Component DID MOUNT.');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Counter UPDATED from: ', prevState.count, 'to', this.state.count);
    }

    componentWillUnmount() {
        console.log("======== Component COUNTER is UNMOUNTED! ========");
        clearInterval(this.timer); // !!!
    }


    render() {
        console.log('I am in the RENDER of the Counter.');
        return (
            <h1> {this.state.count}</h1>
        )
    }
}

export default Counter;