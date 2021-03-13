import React, { PureComponent } from "react";

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 即将渲染获取时间 beginTime
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }
    // 结束渲染获取时间 endTime
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}渲染时间为： ${interval}`);
    }
    render() {
      return <WrappedComponent />;
    }
  };
}

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

class About extends PureComponent {
  render() {
    return <div>About</div>;
  }
}

const RenderHome = withRenderTime(Home);
const RenderAbout = withRenderTime(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        <RenderHome />
        <RenderAbout />
      </div>
    );
  }
}

export default App;
