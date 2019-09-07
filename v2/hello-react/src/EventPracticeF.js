/**
 * Author: 진경민
 * 4장 이벤트 핸들링
 */

import React, { useState } from "react";

const EventPracticeF = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;

  // 인풋의 개수가 적을 때 onChange 관련 함수 활용
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용 복사하고
      [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기 message에서는 메세지, name 에서는 name 으로 들어감
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeF;
