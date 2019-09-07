import React, { Component } from "react";
import styles from "./MarkdownRender.scss";
import classNames from "classnames/bind";

import marked from "marked";

//prism 관련 코드
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-bash";
//지원할 코드형식
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
    html: ""
  };

  renderMarkdown = () => {
    const { markdown } = this.props;
    //마크다운이 존재하지 않는다면 공백 처리
    if (!markdown) {
      this.setState({ html: "" });
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, //일반 엔터로 새 줄 입력
        sanitize: true //마크다운 내부 html 무시
      })
    });
  };

  constructor(props) {
    super(props);
    const { markdown } = props;
    //서버사이드 렌더링에서도 마크다운 처리가 되도록 constructor 에서도 구현한다.
    this.state = {
      html: markdown
        ? marked(props.markdown, { breaks: true, sanitize: true })
        : ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //마크다운 값이 변경되면 렌더마크다운 호출
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }
    //state 가 바뀌면 코드 하이라이팅
    if (prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  render() {
    const { html } = this.state;

    //리액트에 html 을 렌더링하려면 객체를 만들어서 내부에
    //__html 값을 설정해야한다.
    const markup = {
      __html: html
    };

    //그리고 dangerouslySetInnerHTML 값에 해당 객체를 넣어주면 된다.
    return (
      <div className={cx("markdown-render")} dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;
