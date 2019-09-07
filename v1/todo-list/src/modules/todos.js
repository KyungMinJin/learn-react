import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

//액션 타입 정의
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

//액션 생성 함수
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

//리듀서 초기 상태 정의
const initialState = List([
  Map({
    id: 0,
    text: "리액트 공부하기",
    done: true
  }),
  Map({
    id: 1,
    text: "컴포넌트 스타일링 해보기",
    done: false
  })
]);

//리듀서 생성
export default handleActions(
  {
    [INSERT]: (state, action) => {
      /**
       * payload 안에 있는 id, text, done의 레퍼런스를 만들어 준다.
       * 레퍼런스를 만들지 않고, 바로 push(Map(action.payload))를 해도 되지만
       * 나중에 이 코드를 보았을 때,
       * 액션이 어떤 데이터 처리하는지 쉽게 볼 수 있도록 함
       */
      const { id, text, done } = action.payload;

      return state.push(
        Map({
          id,
          text,
          done
        })
      );
    },
    [TOGGLE]: (state, action) => {
      const { payload: index } = action;
      // = const index = action.payload;
      /**
       * 비구조화 할당으로 index 레퍼런스에 action.payload 값을 넣음
       * 필수 작업은 아니지만, 나중에 이 코드를 보았을 때, 여기서 payload가
       * 어떤 값을 의미하는지 쉽게 이해 가능
       */
      //updateIn으로 현재 값을 참조하여 반대 값으로 설정
      return state.updateIn([index, "done"], done => !done);
      //updateIn 사용 안하면 setIn 사용 가능
    },
    [REMOVE]: (state, action) => {
      const { payload: index } = action;
      return state.delete(index);
    }
  },
  initialState
);
