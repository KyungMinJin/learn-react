import React, { Component } from "react";
import TodoInput from "../components/TodoInput";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//액션 생성 함수 모두 불러오기
import * as inputActions from "../modules/input";
import * as todosActions from "../modules/todos";

class TodoInputContainer extends Component {
  //필요한 메소드 구현, props TodoInput에 전달
  id = 1;
  getId = () => {
    return ++this.id;
  };

  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  };

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
    const todo = {
      id: this.getId(),
      text: value,
      done: false
    };
    TodosActions.insert(todo);
    InputActions.setInput("");
  };

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;

    return (
      <TodoInput
        onChange={handleChange}
        onInsert={handleInsert}
        value={value}
      />
    );
  }
}

/* *mapStateToProps와 mapDispatchToProps 함수 레퍼런스를
따로 만들지 않고, 내부에 바로 정의함 */
//리덕스에 상태와 액션 생성함수 연결
export default connect(
  state => ({
    value: state.input.get("value")
  }),
  dispatch => ({
    /**
     * bindActionCreators를 사용하면 자동으로 다음 작업들을 함.
     * {
     *      actionCreator: (...params) => dispatch(actionCreator(...params))
     * }
     * 그래서 이전에 했던 것 처럼 일일이 dispatch할 필요가 없음
     */
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
    /**
     * 예를 들어 이 inputActions: {
     *      setInput: (value) => dispatch(inputActions.setInput(value))
     * } 로 작성
     *  나중에 이를 호출하려면 this.props.InputActions.setInput 을 호출하면 됨.
     */
  })
)(TodoInputContainer);
