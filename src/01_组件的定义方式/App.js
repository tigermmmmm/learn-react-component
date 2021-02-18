// import { Component } from "react";

// const { Component } = require('react')
// import react, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: "你好李煥英！",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h2>我是app</h2>
//         <h2>{this.state.message}</h2>
//       </div>
//     );
//   }
// }


/**
 * 函數式組件特點：
 * 1、沒有this對象
 * 2、沒有內部狀態（hooks）
*/
export default function App() {
  return (
    <div>
      <span>我是function組件！</span>
    </div>
  )
}

