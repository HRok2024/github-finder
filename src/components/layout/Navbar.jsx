import React from "react";
import { FaGithub } from "react-icons/fa";
// rfcp, props에 타입을 넣어준다
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              HOME
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

//props가 없을 때(props의 title을 입력하지 않았을 때) 기본 깃허브 파인더 입력
Navbar.defaultProps = {
  title: "Github Finder",
};
//props의 title 타입은 string(문자열)
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
