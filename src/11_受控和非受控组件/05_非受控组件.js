import React, { PureComponent, createRef } from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.inputRef = createRef()
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户：
                        <input 
                            type="text" 
                            id='username'
                            ref={this.inputRef}
                        />
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.inputRef.current.value);
    }
}


export default App;