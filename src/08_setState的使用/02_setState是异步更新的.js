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
                <h2>当前文本：{this.state.message}</h2>
                <button onClick={e => this.changeContext()}>改变文本</button>
            </div>
        )
    }

    componentDidUpdate() {
        // 方式二： 获取异步更新state 先到这
        console.log(this.state.message);
    }

    changeContext() {
        // setState是异步更新的
        // this.setState({
        //     message: 'hello ljm'
        // })
        // 先执行下面 上面异步还没执行完 所以打印的还是上次的数据
        // console.log(this.state.message);

        // 获取更新后的数据
        // 方式一：setState(更新的state, 回调函数)
        this.setState({
            message: 'hello tiger'
        }, () => {
            console.log(this.state.message);
        })
    }

}
