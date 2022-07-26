import React from 'react'
import { useState, useContext } from "react"
import "./LoginForm.css"
import styled from "styled-components";
import { BiLock } from "react-icons/bi";
import { AiOutlineIdcard, AiFillApple, AiFillFacebook } from "react-icons/ai";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"


import { FcGoogle } from "react-icons/fc"



export const LoginForm = ({ togglestate, GoogleSignIn, FbSignIn }) => {

  const { handlelogindetails } = useContext(AuthContext)

  const navigate = useNavigate();
  const [logindata, setlogindata] = useState("")
  const [error, seterror] = useState("")

  const Button = styled.button`
    background-color:${({ theme }) =>
      theme === "facebook_login"
        ? "rgb(59,89,152)"
        : theme === "google_login"
          ? "white"
          : "black"};
    border-radius:5px;
    color:${({ theme }) =>
      theme === "google_login" ? "black" : "white"};
    border: ${({ theme }) =>
      theme === "google_login" ? "1px solid gray" : "none"};
    font-size:13px;
    padding: 8px 0px;
    margin-bottom: 8px;
    cursor:pointer;
    display: flex;
    align-items: center; `;

  const handlechange = (e) => {

    console.log(e)
    const { value, name } = e.target
    console.log(name, value)

    setlogindata({
      ...logindata,
      [name]: value,
    })


  }

      const getdata = async () => {
        try {
          const res = await axios.post(
            "https://huffpost-clone.herokuapp.com/login",
            logindata
          );

      console.log(res);

      console.log(res.data)

      seterror(res.data.error);

      for (let x in res.data) {

        if (x !== "error") {

          handlelogindetails(res.data.user)
          navigate("/")

        }
      }





    } catch (err) {
      console.log(err);
    }
  };

  const handlesubmit = (e) => {

    e.preventDefault()

    getdata()

    console.log(logindata)



  }
  return (
    <div className="login_maindiv">
      <div className="logodiv">

        <Link to="/">
          <img
            src="https://jackswifefreda.com/wp-content/uploads/2021/06/huffpost-logo.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="buttondiv">
        <div className="login_inner_div">
          <p onClick={() => togglestate(true)}>Log In</p>
        </div>
        <div>
          <p onClick={() => togglestate(false)}>Sign Up</p>
        </div>
      </div>

      <div className="social_login_div">
        <Button>
          <AiFillApple className="button_svg" /> Sign In With Apple
        </Button>
        <Button theme={"facebook_login"}
          onClick={() => { FbSignIn() }}
        >
          <AiFillFacebook className="button_svg" />
          Sign In With Facebook
        </Button>
        <Button theme={"google_login"}

          onClick={() => { GoogleSignIn() }}
        >
          <FcGoogle className="button_svg" />
          Sign In With Google
        </Button>
        <p>or</p>
      </div>

      <form action="" onSubmit={handlesubmit}>
        <div className="login_form">
          <div>
            <div>
              <AiOutlineIdcard />
            </div>

            <input
              type="text"
              placeholder="   your@example.com"
              className="login_email"
              name="email"
              onChange={handlechange}
            />
          </div>
          <div>
            <div>
              <BiLock />
            </div>

            <input
              type="password"
              placeholder="   your password"
              className="login_password"
              name="password"
              onChange={handlechange}
            />
          </div>
          {error}

          <a href="">Don't remember your password?</a>
        </div>
        <div className="login_button">
          <input type="submit" value="LOG IN" />
        </div>
      </form>
    </div>
  );
}
