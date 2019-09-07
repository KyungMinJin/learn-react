import React, { Component } from "react";
import TodoList from "../components/TodoList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as todosActions from "../modules/todos";

class TodoListContainer extends Component {
  //필요한 메소드 구현, props TodoList에 전달

  handleToggle = id => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };

  handleRemoove = id => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };

  render() {
    const { todos } = this.props;
    const { handleRemoove, handleToggle } = this;

    return (
      <TodoList
        todos={todos}
        onRemove={handleRemoove}
        onToggle={handleToggle}
      />
    );
  }
}

//리덕스에 상태와 액션 생성함수 연결
export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);
