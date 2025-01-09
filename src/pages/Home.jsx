import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home({ handleAlert }) {
  return (
    <>
      <UserSearch handleAlert={handleAlert} />
      <UserResults />
    </>
  );
}

export default Home;
