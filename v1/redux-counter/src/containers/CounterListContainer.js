import CounterList from "../components/CounterList";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../lib/getRandomColor";

//13가지 색 랜덤으로 선택

//store 안의 state 값을 props로 연결
const mapStateToProps = state => ({ counters: state.counters });

/**
 * action 생성자를 사용하여 액션 만들고
 * 해당액션을 dispatch 하는 함수를 만든 후 props로 이를 연결
 */

const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  }
});

//데이터와 함수들이 props로 붙은 컴포넌트 생성
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
