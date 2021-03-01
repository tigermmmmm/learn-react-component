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
                <button id="btn">改变文本2</button>
            </div>
        )
    }

    componentDidMount() {
        // document.getElementById("btn").addEventListener("click",() => {
        //     this.setState({
        //         message: 'hello tiger'
        //     })
        //     console.log(this.state.message);  // hello tiger
        // })

        // this.setState({
        //     message: 'hello tiger'
        // })
        // console.log(this.state.message);  // hello gy
    }

    changeContext() {
        // setTimeout(() => {
        //     this.setState({
        //         message: 'hello tiger'
        //     })
        //     console.log(this.state.message);
        // }, 0)
    }

}

// 总结
// 两种情况： 
// 一： 在组件生命周期或React合成事件中，setState是异步的；
// 二： 在setTimeout或者原生dom事件中，setState是同步的；
