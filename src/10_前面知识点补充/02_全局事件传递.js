import React, { PureComponent } from 'react';

import { EventEmitter } from "events";

// 事件总线 event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
    componentDidMount() {
        eventBus.addListener('sayHello', this.sayHi)
    }

    componentWillUnmount() {
        eventBus.removeListener('sayHello', this.sayHi)
    }

    sayHi(num, mess) {
        console.log(num, mess);
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class Profile extends PureComponent {
    render() {
        return (
            <div>
                Profile
                <button onClick={e => this.emitEvent()}>点击了profile按钮</button>
                
            </div>
        )
    }

    emitEvent() {
        eventBus.emit('sayHello', 123, 'gygy')
    }
}

// rpc
class App extends PureComponent {
    render() {
        return (
            <div>
                <Home></Home>
                <Profile></Profile>
            </div>
        );
    }
}

export default App;