import React, { PureComponent } from "react";

function Header() {
    console.log('Header被调用');
    return <h2>我是Footer组件</h2>;
}
class Banner extends PureComponent {
    render() {
        console.log('Banner render被调用');
        return <h2>我是Banner组件</h2>
    }
}
function ProductList() {
    console.log('ProductList被调用');
    return (
        <ul>
            <li>商品列表1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    );
}
class Main extends PureComponent {
    render() {
        console.log('Main render被调用');
        return (
            <div>
                <Banner />
                <ProductList />
            </div>
        )
    }
}
function Footer() {
    console.log('Footer被调用');
    return <h2>我是Footer组件</h2>;
}

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    render() {
        console.log('App render被调用');
        return (
            <div>
                <div>当前计数： {this.state.count}</div>
                <button onClick={e => this.increment()}>+1</button>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }

    increment() {
        this.setState({                                                                                                                                                                                 
            count: this.state.count + 1
        })
    }
}
