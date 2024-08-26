import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "./backdrop";
import Modal from "./Modal";
import Sixty from "./Sixty";
import axios from "axios";

const SignupPage = () => {
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    userName: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const { name, userName, email, password } = userData;

  // const [name, setName] = useState("");
  // const [userName, setuserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserData = async (userData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/users/register",
        userData
      );
      console.log(data);
      alert(data && data.msg);
    } catch (err) {
      console.log(err);
      alert(err.response && err.response.data.msg);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      name: "",
      userName: "",
      email: "",
      password: "",
    });
    console.log(userData);
    navigate("/users/signin");
    handleUserData(userData);
    // userData.name = "";
    // userData.userName = "";
    // userData.email = "";
    // userData.password = "";
  };

  return (
    <>
      <Sixty />
      <Backdrop close={() => navigate("/")} />
      <Modal>
        <div className="overall-box">
          <form className="form" onSubmit={handleSubmit}>
            <div
              className="icon"
              onClick={() => {
                navigate("/");
              }}
            >
              <FaTimes />
            </div>
            <div className="form-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="title">
              <div>
                <h2>
                  Create <br />
                  your account
                </h2>
              </div>
              <div>
                <p>Enter your details to start your journey today</p>
              </div>
            </div>
            <div className="login-button">
              <button>
                {" "}
                <FaGoogle /> Sign Up with Google
              </button>
            </div>
            <div className="option">
              <h4>__________ OR __________</h4>
            </div>
            <div className="login-input">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={handleChange}
                value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="login-input">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                required
                // onChange={(e) => setuserName(e.target.value)}
                onChange={handleChange}
                value={userName}
              />
            </div>
            <div className="login-input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="login-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handleChange}
                value={password}
              />
            </div>
            <div className="login-button active">
              <button>Sign Up</button>
            </div>
            <div className="alert">
              <small>
                Have an account? <Link to="/users/signin">Sign In here</Link>
              </small>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SignupPage;
