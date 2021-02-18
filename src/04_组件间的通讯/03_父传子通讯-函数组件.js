import React, { Component } from 'react'

function ChildCpn(props) {
    const {name, age, height} = props;
    
    return (
        // eslint-disable-next-line
        <h2>子组件展示数据:{ "name:" + name + " " + "age:" + age + " " + "height:" + height }</h2>
    );
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
