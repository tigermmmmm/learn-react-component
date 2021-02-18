import React, { Component } from 'react'

class Cpn extends Component {
    render() {
        return (
            <h2>我是Cpn组件</h2>
        )
    }

    componentWillUnmount() {
        /** 
         * 在组件卸载及销毁之前调用
         * 通常用于：
         * 1、清理操作
         * 2、清除timer，取消网络请求或取消订阅
        */
        console.log('调用了componentWillUnmount');
    }
}

export default class App extends Component {
    constructor() {
        /**
         * 给this.state赋值对象初始化内部state
         * 为事件绑定实例（this）
         */
        super();

        this.state = {
            count: 0,
            isShow: true
        }

        //例： this.increment.bind(this);

        console.log('执行了组件的constructor方法');
    }

    render() {
        console.log('执行了组件的render方法');
        return (
            <div>
                我是App组件
                <h2>{this.state.count}</h2>
                <button onClick={e => this.increment()}>+</button>
                <hr/>
                {this.state.isShow && <Cpn/>}
                <button onClick={e => this.changeCpnShow()}>切换</button>
            </div>
        )
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    changeCpnShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    
    componentDidMount() {
        /**
         * 组件挂载后(插入DOM树中)立即调用
         * 通常用于：
         * 1、依赖于DOM的操作可以在这里进行
         * 2、网络请求
         * 3、添加订阅（会在componentWillUnmount取消订阅）
        */
        console.log('执行了组件的componentDidMount方法');
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        /** 
         * 更新后立即调用，首次不调用
         * 通常用于：
         * 1、组件更新后操作
         * 2、更新前后props进行比较，判断是否发送请求
        */
        console.log('执行了组件的componentDidUpdate方法');
    }
}
