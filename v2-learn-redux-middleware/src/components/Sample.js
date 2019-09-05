/** Author: 진경민
 * api를 통해 받은 데이터의 형식 중 post의 경우면 title과 body,
 * user의 경우 username과 email만 보여주게 변경
 */

import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "로딩 중..."}
        {!loadingPost &&
        post && ( // post 객체가 유효할 때만 title, body 를 보여줌
            <div>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </div>
          )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && "로딩 중..."}
        {!loadingUsers && users && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
