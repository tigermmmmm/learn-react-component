import React, { PureComponent } from 'react';

class APP extends PureComponent {
    constructor(props) {
        super(props);

        // 引用类型
        this.state = {
            friends: [
                { name: 'ljm', age: 25 },
                { name: 'gy', age: 22 },
                { name: 'dd', age: 1 }
            ]
        }
    }

    render() {
        return (
            <div>
                <div>好友列表</div>
                <ul>
                    {
                        this.state.friends.map((item, index) => {
                            return (
                                <li key={item.name}>
                                    姓名： {item.name}
                                    年龄：{item.age}
                                    <button onClick={e => this.incrementAge(index)}>age + 1</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={e => {
                    this.inserData()
                }}>添加数据</button>
            </div>
        );
    }

    // shouldComponentUpdate(newProps, newState) {
    //     if(newState.friends !== this.state.friends) {
    //         return true
    //     }

    //     return false;
    // }

    inserData() {
        // 1、开发中不要这样做
        // const newData = {name: 'Tom', age: 18};
        // this.state.friends.push(newData);
        // this.setState({
        //     // 内存地址是一样的
        //     friends: this.state.friends
        // })

        // 2、推荐用法
        // const newFriend = [...this.state.friends];
        // newFriend.push({
        //     name: 'tom', age: 13
        // })
        // this.setState({
        //     friends: newFriend
        // })

        // 简化写法
        this.setState({
            friends: [...this.state.friends, {
                name: 'tom', age: 13
            }]
        })
    }

    incrementAge(index) {
        const newFriend = [...this.state.friends];
        newFriend[index].age += 1;
        this.setState({
            friends: newFriend
        })
    }

}

export default APP;