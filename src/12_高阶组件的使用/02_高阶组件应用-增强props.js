import React, { PureComponent } from 'react';

function enhanceComponent(WrapComponent) {
    return props => {
        return <WrapComponent {...props} region="中国" />
    }
}


class Home extends PureComponent {
    render() {
        return (
            <div>
                {`姓名: ${this.props.name} 年龄： ${this.props.age} 国家：${this.props.region}`}
            </div>
        )
    }
}

const EnhanceComponent = enhanceComponent(Home);
// export default enhanceComponent(Home);

class About extends PureComponent {
    render() {
        return (
            <div>
                {`姓名: ${this.props.name} 年龄： ${this.props.age} 国家：${this.props.region}`}
            </div>
        )
    }
}

const EnhanceAbout = enhanceComponent(About);

class App extends PureComponent {
    render() {
        return (
            <div>
                <EnhanceComponent name='gy' age={9} />
                <EnhanceAbout name='ljm' age={19} />
            </div>
        );
    }
}

export default App;