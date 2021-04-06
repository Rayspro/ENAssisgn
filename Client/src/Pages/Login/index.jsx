import React, { useState, useEffect } from "react";
import "./style.css";
import FullInput from "../../Component/Fullinput";
import Button from "../../Component/Button";
import { connect } from "react-redux";
import {
  LoginAction,
  DefaultLoginAction,
} from "../../Redux/actions/user.action";

function Login({ loading, LoginAction, DefaultLoginAction, login, history }) {
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    DefaultLoginAction();
  }, []);

  useEffect(() => {
    if (login) {
      history.push("/dashboard");
    }
    setLoad(loading);
  }, [loading]);

  function inputController(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function initLogin() {
    LoginAction(user);
  }

  return (
    <div className="login-root">
      <div className="login-small">
        <h1>Login</h1>
        <FullInput
          name="email"
          value={user.name}
          change={inputController}
          placeholder="Enter your email"
        />
        <FullInput
          name="password"
          value={user.password}
          change={inputController}
          type="password"
          placeholder="Enter your Password"
        />
        <Button click={initLogin} text="Login" load={load} />
      </div>
    </div>
  );
}

const mapsStateToProps = (state) => {
  return {
    loading: state.user.loading,
    login: state.user.login,
  };
};

export default connect(mapsStateToProps, { LoginAction, DefaultLoginAction })(
  Login
);
