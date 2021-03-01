import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.count}</h2>
                <button onClick={e => this.increment()}>+</button>
            </div>
        )
    }

    increment() {
        // 必须通过setState来改变当前数据
        // this.state.count += 1;  错误 react不知道数据改变了 

        this.setState({
            count: this.state.count + 1
        })
    }

}
