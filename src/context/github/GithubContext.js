import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
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
  return (
    <GithubContext.Provider value={{ users, loading, searchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
