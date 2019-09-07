import React, { Component } from "react";
import MyComponent from "./MyComponents";
import "./App.css";
import Counter from "./Counter";
import Say from "./Say";
import EventPracticeF from "./EventPracticeF";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  // const style = {
  //   //background-color는 - 사라지고 카멜 표기법으로 작성됩니다.
  //   backgroundColor: "black",
  //   color: "react",
  //   fontSize: "48px",
  //   fontWeight: "bold",
  //   padding: 16 // 단위 생략 시 px
  // };
  render() {
    const name = "리액트";
    return (
      <>
        <div className="react">
          {(name === "리액트" && <h1>리액트입니다.</h1>) ||
            "값이 undefined입니다."}
        </div>
        <h2>잘 작동하니?</h2>
        <MyComponent name="React" favoriteNumber={1}>
          리액트
        </MyComponent>
        <Counter />
        <Say /> {/* 3장 */}
        <EventPracticeF /> {/* 4장 */}
        <ValidationSample /> {/* 5장 */}
        <ScrollBox ref={ref => (this.scrollBox = ref)} /> {/* 5장 */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        {/* 5장 */}
      </>
    );
  }
}

export default App;
