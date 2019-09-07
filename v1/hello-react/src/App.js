import React, { Component } from "react";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <MyComponent name="React" age={23} />
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <IterationSample />
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

// 다른 방법
// MyComponent.defaultProps = {
//   name: "기본 이름"
// };

export default App;

// import React from "react";
// import "./App.css";

// function App() {
//   const text = "당신은 어썸한가요?";
//   const condition = true;
//   const style = {
//     backgroundColor: "gray",
//     border: "1px solid black",
//     height: Math.round(Math.random() * 300) + 50,
//     width: Math.round(Math.random() * 300) + 50,
//     WebkitTransition: "all",
//     MozTransition: "all",
//     msTransition: "all"
//   };

//   return (
//     <div className="my-div">
//       {
//         /*요소 밖 주석 */
//         //요소 밖 주석
//       }
//       <h1>리액트 안녕!</h1>
//       <h2>{text}</h2>
//       {condition ? "참" : "거짓"}
//       {condition ? "참" : null}
//       {condition ? "참" : false}
//       {condition && "참"}
//       <div
//         style={style}
//         //self-closed 태그에서만 작동하는 주석
//         // 마지막 /> 필요
//         /* 이렇게도 ㄱㄴ */
//       />
//       //여기는 렌더링 됨 /* 이거도 렌더링 됨 */
//     </div>
//   );
// }

// export default App;
