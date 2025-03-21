import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchUsers();
  // }, []); //[]는 앱 시작시 실행한다는 뜻이다

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <>
        <Spinner />
      </>
    );
  }
}

export default UserResults;
