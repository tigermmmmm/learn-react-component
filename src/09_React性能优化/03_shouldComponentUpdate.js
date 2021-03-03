import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            message: 'kkk'
        }
    }
    render() {
        console.log('App render被调用');
        return (
            <div>
                <div>当前计数： {this.state.count}</div>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.count !== this.state.count) {
            return true;
        }
        return false;
    }

    changeText() {
        this.setState({
            message: 'pp'
        })
    }

    increment() {
        this.setState({                                                                                                                                                                                 
            count: this.state.count + 1
        })
    }
}
