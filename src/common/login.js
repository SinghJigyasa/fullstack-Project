import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    if (inputValue.email) {
      const result = inputValue.email.match(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      );
      console.log("Result:", result);
      navigate("/home");
      localStorage.setItem("userdetails", JSON.stringify(inputValue.email));
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter your email-Id.");
    }

    //   axios.post('http://localhost:8080/login', inputValue)
    //       .then(res => {
    //           if (res.status === 200) {
    //               localStorage.setItem("userdetails", JSON.stringify(res.data.result));
    //               navigate('/home');
    //           }
    //       })
    //       .catch(err => {
    //           console.log(err);
    //           setErrorMessage("Invalid credentials. Please check your email and password.");
    //       });
  };

  return (
    <section className="d-flex align-items-centerjustify-content-center">
      <div className="container">
        <div className="row my-5">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto">
            <div className="card shadow rounded-4 border-1 p-lg-5">
              <h1 className="h2 text-danger text-center fw-bold">Login</h1>
              <form>
                <h1 className="fw-bold items-center py-3 justify-center ">
                  Login to your account
                </h1>
                {errorMessage && (
                  <div className="text-red-500 text-sm mb-4">
                    {errorMessage}
                  </div>
                )}
                <div className="mb-4 pt-4 d-block">
                  <label className=" fw-medium" htmlFor="username">
                    Email Address
                  </label>
                  <input
                    className="form-control mt-1"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="d-block mb-4 pt-2 ">
                  <label className="fw-medium" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control mt-1"
                    name="pass"
                    onChange={handleChange}
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="d-block border-bottom ">
                  <button
                    className="btn btn-warning w-100 my-2 mb-4 fw-medium"
                    type="button"
                    onClick={handleClick}
                  >
                    Log in
                  </button>
                </div>
                <div className="mt-3 text-center ">
                  <span className="me-4" style={{color:'#b5b1b1'}}> Don't have an account? </span>
                    <Link className="link-underline link-underline-opacity-0 link-primary"  to="/register">
                     sign up
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

export default Login;
