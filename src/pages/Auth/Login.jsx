import Lottie from "lottie-react";
import React, { use } from "react";
import lottelog from "../../assets/LotteJson/lottelog.json";
import Social from "./Social";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = use(AuthContext);

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password)

    loginUser(email, password)
      .then((result) => {
        const loginInfo = {
          email,
          lastSignIntime: result.user?.metadata?.lastSignInTime,
        };

        // update last sign in db
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              style={{ width: "510px" }}
              animationData={lottelog}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login Here!</h1>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <p className="text-center mt-4">
                    Don’t have an account?{" "}
                    <a
                      href="/register"
                      className="text-blue-600 hover:underline"
                    >
                      Register here
                    </a>
                  </p>
                </fieldset>
              </form>
              <Social></Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
