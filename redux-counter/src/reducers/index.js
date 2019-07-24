import * as types from "../actions/ActionTypes";

const initialState = {
  counters: [
    {
      color: "black",
      number: 0
    }
  ]
};

function counter(state = initialState, action) {
  const { counters } = state;

  switch (action.type) {
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counter[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

// import number from "./number";
// import color from "./color";

// import { combineReducers } from "redux";

// const reducers = combineReducers({
//   numberData: number,
//   colorData: color
// });

// export default reducers;

// // import * as types from "../actions/ActionTypes";

// // const initialState = {
// //   color: "black",
// //   number: 0
// // };

// // function counter(state = initialState, action) {
// //   switch (action.type) {
// //     case types.INCREMENT:
// //       return {
// //         ...state,
// //         number: state.number + 1
// //       };
// //     case types.DECREMENT:
// //       return {
// //         ...state,
// //         number: state.number - 1
// //       };
// //     case types.SET_COLOR:
// //       return {
// //         ...state,
// //         color: action.color
// //       };
// //     default:
// //       return state;
// //   }
// // }

// // export default counter;
