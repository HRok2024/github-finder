import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { login } = useParams();
  return <div>User</div>;
}

export default User;
