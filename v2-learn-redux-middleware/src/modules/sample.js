import { handleActions } from "redux-actions";
import * as api from "../lib/api";

//액션 타입을 선언
//한 요청 당 세 개를 만들어야 합니다.

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//thunk 함수를 생성
//thunk 함수 내부에서는 시작, 성공, 실패했을 때 다른 액션을 디스패치

export const getPost = id => async dispatch => {
  dispatch({ type: GET_POST }); //요청 시작한 것을 알림
  // try{

  // }
};
