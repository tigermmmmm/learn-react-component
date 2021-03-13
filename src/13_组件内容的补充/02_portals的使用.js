import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

class Modal extends PureComponent {
    render() {
        return (
            ReactDom.createPortal(
                this.props.title,
                document.getElementById('modal')
            )
        );
    }
}

class App extends PureComponent {
    render() {
        return (
            <div>
                <Modal title='title' />
            </div>
        );
    }
}

export default App;