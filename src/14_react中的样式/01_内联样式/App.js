import React, { PureComponent } from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            color: 'purple'
        }
    }
    render() {
        const pStyle = {
            color: this.state.color,
            // color: 'orange',
            textDecoration: 'underline'
        }

        return (
            <div>
                <h2 style={{fontSize: '50px',color: 'red'}}>我是标题</h2>
                <p style={pStyle}>我是一段文字描述</p>
            </div>
        );
    }
}

export default App;

// 总结
// 小驼峰内联样式

// 优点： 
// 1、样式不冲突
// 2、可以动态获取当前state的状态

// 缺点：
// 1、必须使用小驼峰
// 2、很多样式没有提示
// 3、大量的样式，代码混乱
// 4、某些样式无法编写（伪类，伪元素）