import React, { createRef, PureComponent } from 'react';

class Count extends PureComponent {
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
        this.setState({
            count: this.state.count + 1
        })
    }
}

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.titleRef = createRef();

        this.titleEl = null;

        this.countRef = createRef();
    }
    render() {
        return (
            <div>
                {/* ref=字符串/对象/函数 */}
                <h2 ref='titleRef'>hello react</h2>
                {/* react推荐方式 */}
                <h2 ref={this.titleRef}>hello react</h2>
                {/* 回调函数 */}
                <h2 ref={arg => this.titleEl = arg}>hello react</h2>

                <button onClick={e => this.changeText()}>改变文本</button>
                <hr/>

                <Count ref={this.countRef}></Count>
                <button onClick={e => this.changeCount()}>App按钮</button>

                
            </div>
        );
    }

    changeText() {
        // 使用方式一： 字符串（不推荐， 后续的更新会删除）
        this.refs.titleRef.innerHTML = 'hello gy';

        // 方式二：对象
        this.titleRef.current.innerHTML = 'hello js';

        // 方式三： 回调函数
        this.titleEl.innerHTML = 'hello tiger'

    }

    changeCount() {
        // console.log(this.countRef);
        this.countRef.current.increment();
    }
}

export default App;