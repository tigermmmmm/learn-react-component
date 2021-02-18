import React, { Component } from "react";

import PropTypes from "prop-types";

function ChildCpn(props) {
  const { name, age, height } = props;

  const { names } = props;

  return (
    <div>
      {/* eslint-disable-next-line */}
      <h2>子组件展示数据:{"name:" + name + " " + "age:" + age + " " + "height:" + height}</h2>
      <ul>
        {names.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

// class ChildCpn2 extends Component {
//     // es6中的class fields写法
//     static propTypes = {

//     }

//     static defaultProps = {

//     }

// }

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array,
};

ChildCpn.defaultProps = {
    name: 'ljm',
    age: 23,
    height: 1.77,
    names: ['2','dad'] 
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name='gy' age={18} height={1.65} names={["sd", "ww"]} />
        <ChildCpn age={18} height={1.65} names={["sd", "ww"]} />
      </div>
    );
  }
}
