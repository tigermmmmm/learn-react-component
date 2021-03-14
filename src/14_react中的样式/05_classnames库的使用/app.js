import React, { PureComponent } from 'react';
import classNames from "classnames";

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        }
    }
    render() {
        const { isActive } = this.state;
        const isBar = false;
        const errClass = "error";
        const warnClass = 0;

        return (
            <div>
                {/* 原生React中添加class方法 */}
                <h2 className={"foo bar baz"}>我是标题1</h2>
                <h2 className={'title' + (isActive ? ' active' : '')}>我是标题2</h2>
                <h2 className={['title', (isActive ? 'active' : '')].join(" ")}>我是标题3</h2>

                {/* classnames库添加class */}
                <h2 className="foo bar baz"> 我是标题4</h2>
                <h2 className={classNames("foo bar baz")}>我是标题5</h2>
                <h2 className={classNames({"active": isActive, "bar": isBar}, "title")}>我是标题6</h2>
                <h2 className={classNames("foo", errClass, warnClass, {"active": isActive} )}>我是标题7</h2>
                <h2 className={classNames(['active', 'title'])}>我是标题8</h2>
                <h2 className={classNames(['active', 'title'], {"active": isActive})}>我是标题9</h2>
            </div>
        );
    }
}

export default App;