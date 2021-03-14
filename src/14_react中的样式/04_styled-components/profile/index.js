import React, { PureComponent } from "react";
import styled from "styled-components";

/* 特点：
*  1、props穿透
*  2、attrs的使用
*  3、传入state作为props属性
*/
const HYInput = styled.input.attrs({
  placeholder: 'xixixi',
  borderColor: "red"
})`
  background-color: #bbb;
  border-color: ${props => props.borderColor};
  color: ${props => props.color}
`

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        color: 'purple'
    }
}
  render() {
    return (
      <div>
        <HYInput type="passward" color={this.state.color} />
        <h2>我是profile的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
