import React, { Component } from 'react'

function ProfileHeader(props) {
    return (
        <div>
            <h2>用户名称： {props.nickName}</h2>
            <h2>用户等级： {props.level}</h2>
        </div>
    )
}

function Profile(props) {
    return (
        <div>
            {/* 属性展开 */}
            <ProfileHeader {...props} />
            {/* <ProfileHeader nickName={props.nickName} level={props.level} /> */}
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: 'ljm',
            level: 88
        }
    }

    render() {
        // const {nickName, level} = this.state;

        return (
            <div>
                <Profile {...this.state} />
                {/* <Profile nickName={nickName} level={level}  /> */}
            </div>
        )
    }
}
