import React, { useState } from "react";
import { useEffect } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []); //[]는 앱 시작시 실행한다는 뜻이다

  const fetchUsers = () => {
    //   console.log("주소" + process.env.REACT_APP_GITHUB_URL);
    //   console.log("토큰" + process.env.REACT_APP_GITHUB_TOKEN);
    fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user, idx) => (
        <h3 key={idx}>{user.login}</h3>
      ))}
    </div>
  );
}

export default UserResults;
