import React from "react";
import MyComponent from "./MyComponents";
import "./App.css";
import Counter from "./Counter";
import Say from "./Say";
import EventPracticeF from "./EventPracticeF";

const App = () => {
  const name = "리액트";
  // const style = {
  //   //background-color는 - 사라지고 카멜 표기법으로 작성됩니다.
  //   backgroundColor: "black",
  //   color: "react",
  //   fontSize: "48px",
  //   fontWeight: "bold",
  //   padding: 16 // 단위 생략 시 px
  // };

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
      <Say /> {/* 3징 */}
      <EventPracticeF /> {/* 4징 */}
    </>
  );
};

export default App;
