import React, { Component } from 'react';
import './style.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar nav-item">
                <div className="nav-left">
                    {this.props.children[0]}
                </div>
                <div className="nav-center">
                    {this.props.children[1]}
                </div>
                <div className="nav-right">
                    {this.props.children[2]}
                </div>
            </div>
        )
    }
}
