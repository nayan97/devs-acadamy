import React, { use } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/LotteJson/lottereg.json";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Social from "./Social";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, updateUserProfile } = use(AuthContext);
   const navigate = useNavigate();

  const handleRegisiter = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    // const name = form.name.value;
    // console.log(name, email, password);
    // Password Validation
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!uppercase) {
      Swal.fire("Warning", "Must have an Uppercase letter", "warning");
      return;
    }

    if (!lowercase) {
      Swal.fire("Warning", "Must have an lowercase letter", "warning");
      return;
    }

    if (!minLength) {
      Swal.fire("Warning", "Length must be at least 6 characters", "warning");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,

          creationTime: result.user?.metadata?.creationTime,
        };

        // console.log(result.user);
        //save user in the db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // console.log("added");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 2000,
              });

              // form.reset();

              navigate("/");
            }
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
              style={{ width: "320px" }}
              animationData={groovyWalkAnimation}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register Here!</h1>
              <form onSubmit={handleRegisiter}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral mt-4">Register</button>
                  <p className="text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                      Login here
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

export default Register;
