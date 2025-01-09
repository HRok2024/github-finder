import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { login } = useParams();

  return <div>User</div>;
}

export default User;
