import React, { Component } from "react";
import classNames from "classnames";
import styles from "./App.scss";
import Button from "./components/Button/Button";
import StyledButton from "./components/StyledButton";

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div
        className={cx("box", {
          blue: isBlue
        })}
      >
        <div className={cx("box-inside")} />
        <Button>버튼</Button>
        <StyledButton big>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
