import React, { createContext, PureComponent } from "react";

// 定义一个高阶组件
function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

const UserContext = createContext({
  name: "gy",
  age: 18,
  region: "中国",
});


class Home extends PureComponent {
  render() {
    return (
        <div>{`姓名: ${this.props.name} 年龄： ${this.props.age} 国家：${this.props.region}`}</div>
    //   <UserContext.Consumer>
    //     {(user) => {
    //       return (
    //         <div>
    //           {`姓名: ${user.name} 年龄： ${user.age} 国家：${user.region}`}
    //         </div>
    //       );
    //     }}
    //   </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        {`姓名: ${this.props.name} 年龄： ${this.props.age} 国家：${this.props.region}`}
      </div>
    );
  }
}

const UerHome = withUser(Home);
const UerAbout = withUser(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ name: "gy", age: 19, region: "中国" }}>
          <UerHome />
          <UerAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
