import React, { Component } from 'react'

class ChildCpn extends Component {
    // constructor(props) {
    //     super();
    //     console.log(this.props, 'props');  // undefined
    // }
     
    render() {
        const {name, age, height} = this.props;  // 这里能使用，源码中 会在此处赋值。
        
        return (
            // eslint-disable-next-line
            <h2>子组件展示数据:{ "name:" + name + " " + "age:" + age + " " + "height:" + height }</h2>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name='gy' age='18' height="1.65" />
            </div>
        )
    }
}
