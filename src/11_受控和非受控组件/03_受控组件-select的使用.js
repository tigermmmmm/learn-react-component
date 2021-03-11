import React, { PureComponent } from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fruits: ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <select name="fruits" value={this.state.fruits} onChange={e => this.handleChange(e)}>
                        <option value="apple">苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="orange">橘子</option>
                    </select>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.fruits);
    }

    // React developer tools插件

    handleChange(event) {
        this.setState({
            fruits: event.target.value
        })
    }
}


export default App;