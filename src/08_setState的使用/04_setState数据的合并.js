import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello gy',
            name: 'tiger'
        }
    }

    render() {
        return (
            <div>
                <h2>当前文本：{this.state.message}</h2>
                <div>{this.state.name}</div>
                <button onClick={e => this.changeContext()}>改变文本</button>
                <button id="btn">改变文本2</button>
            </div>
        )
    }

    changeContext() {
        this.setState({
            message: 'hello ljm'
        })

        // 操作：Object.assign({}, this.state, {message: 'hello ljm'})
    }

}