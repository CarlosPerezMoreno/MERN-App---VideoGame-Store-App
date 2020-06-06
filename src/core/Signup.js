import React from "react";
import "./Signup.css";
import Navigation from "../layout/Navigation";

const Signup = () => {
  const signUpForm = () => (
    <form className="sign-box">
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          value={email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
  return (
    <>
      <Navigation />
      <div className="mt-5">
        <h4 className="text-center mb-5"> SIGN UP FROM</h4>;{signUpForm()}
      </div>
    </>
  );
};

export default Signup;
