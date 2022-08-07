import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link , useHistory} from "react-router-dom";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/")
    } catch {
      setError(" Failed to set an account");
    }
    setLoading(false);
  }

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Log In
                    </p>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label"> Email</label>
                          <input
                            type="email"
                            id="form3Example3c"
                            ref={emailRef}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            id="form3Example4c"
                            ref={passwordRef}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          disabled={loading}
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                    <div className="w-100 text-center mt-2">
                      Don't have an account ? <Link to="/signup">Register</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
