import React, { PureComponent } from 'react';

class App extends PureComponent {
    render() {
        return (
            <div>
                App: {this.props.name}
            </div>
        );
    }
}

// App.displayName = 'gy'

function wrapComponent(Wrapped) {
    // 类组件
    // return class extends PureComponent {
    //     render() {
    //         return <Wrapped />
    //     }
    // }
    // eslint-disable-next-line
    class NewComponent extends PureComponent {
        render() {
            return <Wrapped {...this.props} />
        }
    }

    // 函数组件
    function NewComponent2(props) {
        return <Wrapped {...props} />
    }
    // 给组件改名字 类组件、函数组件皆可
    NewComponent2.displayName = 'ggyy';
    return NewComponent2;
}

const WrapComp = wrapComponent(App);

export default WrapComp;