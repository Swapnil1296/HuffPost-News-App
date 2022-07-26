import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Navbar = ({ state }) => {
  const user = JSON.parse(localStorage.getItem("logindetails")) || null;
  console.log(user);

  const [navbar, setnavbar] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 58) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
    console.log(window.pageYOffset);
  });

  return (
    <header className="navbar__container">
      <div className="navbar__upper">
        <div className="navbar__container_leftsymbol">
          <FaBars onClick={() => state()} />
        </div>
        <div className="navbar__container_mainlogo">
          <Link to="/">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar__container_login">
          {user ? (
            <div>
              <Link to={"/member"}>
                <img
                  className="profile-logo"
                  src={
                    user.ImageUrl
                      ? user.ImageUrl
                      : "https://www.nicepng.com/png/detail/964-9648552_png-file-svg-profile-icon-white-png.png"
                  }
                  alt=""
                />
              </Link>
            </div>
          ) : (
            <>
              <Link className="navbar__container_login-items" to="/login">
                Log in{" "}
              </Link>
              <a className="navbar__container_login-items" href="">
                Join HuffPost
              </a>
            </>
          )}
        </div>
      </div>
      <div className={navbar ? "navbar__lower fixed" : "navbar__lower"}>
        <div className={navbar ? "navbar__left showlogo" : "navbar__left"}>
          <FaBars onClick={() => state()} />
          <Link to={"/"}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
        </div>

        <div className="navbar__items">
          <Link className="subnav__item" to="/news/trending">
            NEWS
          </Link>
          <Link className="subnav__item" to="/news/politics/">
            POLITICS
          </Link>
          <Link className="subnav__item" to="/news/entertainment/">
            ENTERTAINMENT
          </Link>
          <Link className="subnav__item" to="/life">
            LIFE
          </Link>
          <a className="subnav__item" href="/section/huffpost-personal">
            PERSONAL
          </a>
          <a className="subnav__item" href="/life/huffpost-shopping">
            SHOPPING
          </a>
          <a className="subnav__item" href="/section/video">
            VIDEO
          </a>
        </div>

        <div className="navbar__right"> U.S. Edition</div>
      </div>
    </header>
  );
};
