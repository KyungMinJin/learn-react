import React, { useReducer, useEffect } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: ""
  });

  //   const [state, dispatch] = useReducer(reducer, {
  //     name: "",
  //     nickname: ""
  //   });
  const { name, nickname } = state;

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      // 업데이트 되기 직전의 값 보여줌
      console.log("cleanup");
      console.log(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const onChange = e => {
  //     dispatch(e.target);
  //   };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
