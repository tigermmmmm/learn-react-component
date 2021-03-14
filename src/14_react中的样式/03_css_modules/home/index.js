import React, { PureComponent } from 'react';
import homeStyle from './style.module.css';

class Home extends PureComponent {
    render() {
        return (
            <div className='home'>
                <h2 className={homeStyle.title}>我是home的标题</h2>
                <div className="banner">
                    <span>轮播图</span>
                </div>
            </div>
        );
    }
}

export default Home;

// 总结
// 解决了局部作用域问题

// 缺点
// 1、引用的类名，不能使用连接符（.home-title）;
// 2、所有的className必须使用style.className形式编写；
// 3、不方便动态修改某些样式，依然需要使用内联样式；
