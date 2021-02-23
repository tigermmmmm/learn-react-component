import React, { Component } from 'react';
import TabControl from './TabControl';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.titles = ['新款','精选','流行'];

        this.state = {
            currentIndex: 0,
            currentTitle: '新款'
        }
    }

    render() {
        const {currentTitle} = this.state;

        return (
            <div>
                <TabControl itemClick1={index => this.itemClick(index)} title={this.titles}/>
                <h2>{currentTitle}</h2>
            </div>
        )
    }

    itemClick(index) {
        this.setState({
            currentTitle: this.titles[index]
        })
    } 
}
