import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /**
     * 앞 코드에는 비구조화 할당 문법을 사용했습니다.
     * scrollTop 세로 스크롤 바 위치
     * scrollHeight 스크롤이 있는 박스 안 div 높이 650
     * clientHeight 바깥 박스 높이 300
     */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)"
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
