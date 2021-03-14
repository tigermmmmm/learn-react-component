import React, { PureComponent } from 'react';
import Home from "../home";
import Profile from "../profile";
import styled, { ThemeProvider } from "styled-components";


const HYButton = styled.button`
    padding: 10px 20px;
    color: red;
`

// const HYPrimaryButton = styled.button`
//     padding: 10px 20px;
//     color: white;
//     background-color: blue;
// `

// 继承
const HYPrimaryButton = styled(HYButton)`
    background-color: blue;
`

class App extends PureComponent {
    render() {
        return (
            // 设置主题
            <ThemeProvider theme={{themeColor: "yellow", fontSize: "30px"}}>
                App
                <Home />
                <hr/>
                <Profile />
                <HYButton>我是一个普通按钮</HYButton>
                <HYPrimaryButton>我是一个primary按钮</HYPrimaryButton>
            </ThemeProvider>
        );
    }
}

export default App;