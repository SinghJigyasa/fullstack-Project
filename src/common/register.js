import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const [fieldData, setFieldData] = useState({});

  const handleChange = (e) => {
    setFieldData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleClick = () => {
    console.log(fieldData);
    axios.post("http://localhost:8080/register", fieldData).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <section className="d-flex justify-content-center align-items-center ">
      <div className="container">
        <div className="row my-5">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto">
            <div className="card shadow rounded-4 border-1 p-lg-5">
              <h1 className="fw-bold items-center py-3 justify-center">
                Register your account
              </h1>
              <form className="text-secondary">
                <div className="row my-3">
                  <div class="col">
                    <label className="form-label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="form-control"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col">
                    <label className="form-label" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="form-control"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="mb-3 my-3">
                  <label htmlFor="email" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="you@example.com"
                    onChange={handleChange}
                  />
                </div>

                <div className="row my-3">
                  <div class="col">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      name="pass"
                      type="password"
                      placeholder="******"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col">
                    <label className="form-label" htmlFor="confirm-password">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      name="confirm-password"
                      type="password"
                      placeholder="*******"
                    />
                  </div>
                </div>
                <div className="d-block border-bottom ">
                  <button
                    className="btn btn-warning w-100 my-2 mb-4 fw-medium"
                    type="button"
                    onClick={handleClick}
                  >
                    sign Up
                  </button>
                </div>
                <div className="mt-3 text-center ">
                  <span className="me-4" style={{ color: "#b5b1b1" }}>
                    Already have an account?
                  </span>
                  <Link
                    className="link-underline link-underline-opacity-0 link-primary"
                    to="/"
                  >
                    sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterUser;
