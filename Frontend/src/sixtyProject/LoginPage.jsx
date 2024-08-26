import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Backdrop from "./backdrop";
import Modal from "./Modal";
import Sixty from "./Sixty";
import axios from "axios";

const LoginPage = ({ user, setUser }) => {
  // const [user, setUser] = useState(false);
  let navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserData = async (userData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/users/login",
        userData
      );
      console.log(data);
      alert(data && data.msg);

      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (err) {
      console.log(err);
      alert(err.response && err.response.data.msg);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    navigate("/users/dashboard");
    setUser(true);
    handleUserData(userData);
    // userData.email = "";
    // userData.password = "";
  };

  return (
    <>
      <Sixty />
      <Backdrop close={() => navigate("/")} />
      <Modal>
        <div className="overall-box2">
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
                  Hello <br />
                  welcome back
                </h2>
              </div>
              <div>
                <p>Enter your personal details to log in</p>
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
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-button active">
              <button type="submit">Sign In</button>
            </div>
            <div className="alert">
              <small>
                Don't have an account?{" "}
                <Link to="/users/signup">Sign up here</Link>
              </small>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginPage;
