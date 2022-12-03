import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GlobalContext } from "../context/MainContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser } = useContext(GlobalContext);

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function logout() {
    signOut(auth)
      .then(() => {
        setUser({});
        localStorage.setItem("user", JSON.stringify({}));
        toast.success(" successfully Signed out", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.success("Something went wrong", {
          autoClose: 2000,
        });
      });
  }

  return (
    <nav>
      <Link to="/" className="logo">
        <h1>BLOGZ</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/create">
            Create
          </Link>
        </li>
        <li>
          {user.uid ? (
            <button onClick={logout} className="auth-btn">
              Sign out
            </button>
          ) : (
            <Link className="auth-btn" onClick={handleClick} to="/auth">
              Sign in
            </Link>
          )}
        </li>
        <FontAwesomeIcon
          className="fa-xmark"
          icon={faXmark}
          onClick={handleClick}
        />
      </ul>
      <FontAwesomeIcon
        className="fa-bars"
        icon={faBars}
        onClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
