import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  //유저 클리어
  const clearUsers = () => {
    setUsers([]);
  };
  //키워드로 유저찾기
  const searchUsers = (text) => {
    setLoading(true);
    const params = new URLSearchParams({ q: text }); //쿼리파라미터 설정
    fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setUsers(data.items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const getUser = (login) => {
    setLoading(true);
    fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch((err) => (window.location = "/notfound"));
  };
  //유저 공개 리파지토리 리스트
  const getUserRepos = (login) => {
    setLoading(true);
    fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
