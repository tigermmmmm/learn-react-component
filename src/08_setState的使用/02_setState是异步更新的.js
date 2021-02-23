import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'hello gy'
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.message}</h2>
                <button onClick={e => this.changeContext()}>+</button>
            </div>
        )
    }

    changeContext() {
        // setState是异步更新的
        this.setState({
            message: 'hello ljm'
        })
        // 先执行下面 上面异步还没执行完 所以打印的还是上次的数据
        console.log(this.state.message);
    }

}
