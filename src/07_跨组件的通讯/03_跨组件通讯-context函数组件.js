import React, { Component } from "react";

// 1、创建context对象
const UserContext = React.createContext({
  nickName: "aaa",
  level: -1,
});

function ProfileHeader() {
  return (
    // 函数组件使用Consumer
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户名称：{value.nickName}</h2>
            <h2>用户等级：{value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickName: "ljm",
      level: 88,
    };
  }

  render() {
    return (
      <div>
        {/* 2、把用到的组件作为子组件放进去 不放进去使用的是默认的值 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
