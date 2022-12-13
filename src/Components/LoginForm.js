import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ emai: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>LOGIN</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-Mail Or UserName"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <br></br>
          <div className="form-group" style={{display:"flex", border:"solid 1px black"}} >
            <label htmlFor="password" ></label>
            <input
             style={{width:"50%", border:" 0px"}}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <div className="form-group" style={{width:"50%", color: "#666",}}>
            <a href="#" className="link"><br></br>
              Forget Password ?
            </a>
            </div>
          </div>
          
          
          {/* <input type="sumit" value="LOGIN" /> */}
          <button type="submit">LOGIN</button>
          <br></br>
          <br></br>
          <h4 style={{ textAlign: "center" }}>
            New Member ?&nbsp;&nbsp;
            <a href="#" style={{ color: "#4bcef9 " }}>
              Sign Up Now
            </a>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
