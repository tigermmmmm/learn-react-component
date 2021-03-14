import React, { PureComponent, StrictMode } from "react";

class Home extends PureComponent {
    constructor(props) {
        super(props);
        // 17版本react更新 在严格模式下重复渲染期间禁用 console。这里可能不会打印两次
        console.log('home construct');
    }
  // 严格模式会报错
  // UNSAFE_componentWillMount() {
  //     console.log('home componentwillmount');
  // }
  render() {
    return (
      <div>
          Home
        {/* <div ref="titleRef">Home</div> */}
      </div>
    );
  }
}

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        console.log('profile construct');
    }
  // UNSAFE_componentWillMount() {
  //     console.log('Profile componentwillmount');
  // }
  render() {
    return <div>Profile</div>;
    // return <div ref="titleRef">Profile</div>;
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}

export default App;

// 总结
// 生产环境不会有影响 只在开发环境 检查过时的不推荐的api

// 1：识别不安全的生命周期

// 2：使用过时的ref API 比如字符串

// 3： 检查意外的副作用
//     组件的constructor会被调用两次

// 4： 使用废弃的findDOMNode方法
// 之前获取dom，现在已经不推荐

// 5: 检测过时的context API
