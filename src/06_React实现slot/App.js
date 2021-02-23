import React, { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <span>dd</span>
                    <span>ff</span>
                    <span>pp</span>
                    <a href="/#">ee</a>
                </Navbar>

                <Navbar2 
                    leftSlot={<span>ssss</span>}
                    centerSlot={<span>eee</span>}
                    rightSlot={<span>ppp</span>} />
            </div>
        )
    }
}
