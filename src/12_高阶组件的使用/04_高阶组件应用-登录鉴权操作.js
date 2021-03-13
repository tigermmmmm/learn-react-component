import React, { PureComponent } from 'react';

function withAuth(WrappedComponent) {
    const NewNpc =  props => {
        const {isLogin} = props;
        if(isLogin) {
            return <WrappedComponent {...props} />
        } else {
            return <Login />
        }
    }

    NewNpc.displayName = 'AuthCpn';
    return NewNpc;
}


class Login extends PureComponent {
    render() {
        return (
            <div>
                登录界面
            </div>
        );
    }
}


class CarPage extends PureComponent {
    render() {
        return (
            <div>
                购物车界面
            </div>
        );
    }
}

const AuthCar = withAuth(CarPage);

class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthCar isLogin={false} />
            </div>
        );
    }
}

export default App;