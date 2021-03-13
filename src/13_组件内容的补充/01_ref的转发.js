import React, { createRef, forwardRef, PureComponent } from "react";

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

// 高阶组件forwardRef
const ProfileRef = forwardRef(function (props, ref) {
  return <h2 ref={ref}>Profile组件</h2>;
});

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>hello react</h2>
        <Home ref={this.homeRef} />
        <ProfileRef ref={this.profileRef} />
        <button
          onClick={(e) => {
            this.printRef();
          }}
        >
          打印Ref
        </button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}

export default App;
