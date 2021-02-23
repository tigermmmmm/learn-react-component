import React, { Component } from 'react'

class CounterButton extends Component {
    render() {
        const {btnClick} = this.props;

        return <button onClick={btnClick}>+1</button>
    }
}


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
                <h2>当前计数：{ this.state.count }</h2>
                <button onClick={e => this.changeCount()}>+</button>

                {/* 第一种方法 */}
                {/* <CounterButton btnClick={this.changeCount.bind(this)} /> */}

                {/* 第二种方法 定义方法使用箭头函数 */}
                {/* <CounterButton btnClick={this.changeCount} /> */}

                {/* 第三种方法  */}
                <CounterButton btnClick={e => this.changeCount()} />

            </div>
        )
    }

    // changeCount() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}
