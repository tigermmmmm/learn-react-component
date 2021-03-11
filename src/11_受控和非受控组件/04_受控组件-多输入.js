import React, { PureComponent } from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            vaild: ''
        }
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
                        value={this.state.username} 
                        name="username"
                        onChange={e => {
                            this.handleChange(e)
                        }} />
                    </label>
                    <br/>
                    <label htmlFor="password">
                        密码：<input type="text" id='password' name="password" value={this.state.password} onChange={e => {
                            this.handleChange(e)
                        }} />
                    </label>
                    <br/>
                    <label htmlFor="vaild">
                        验证：<input type="text" id='vaild' name='vaild' value={this.state.vaild} onChange={e => {
                            this.handleChange(e)
                        }} />
                    </label>
                    <br/>
                    <input type="submit" value="提交" />
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const {username,password,vaild} = this.state;
        console.log(username,password,vaild);
    }

    // React developer tools插件

    handleChange(event) {

        this.setState({
            // es6 计算属性名
            [event.target.name]: event.target.value
        })
    }
}


export default App;