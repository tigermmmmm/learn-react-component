import React, { PureComponent, Fragment } from "react";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      friends: [
          {name: 'gy',age: 9},
          {name: 'pp',age: 19},
          {name: 'ss',age: 29},
      ]
    };
  }
  render() {
    return (
      //   <Fragment>
      //     <h2>当前计数：{this.state.count}</h2>
      //     <button onClick={(e) => this.changeCount()}>+</button>
      //   </Fragment>
      //   短语法
      <>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={(e) => this.changeCount()}>+</button>
        <div>
            {
                this.state.friends.map((item, index) => {
                    return (
                        // 短语法不能添加任何属性
                        <Fragment key={item.name}>
                            <div>{item.name}</div>
                            <p>{item.age}</p>
                            <hr/>
                        </Fragment>
                    )
                })
            }
        </div>
      </>
    );
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default App;
