import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { logInUser } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then(res => {
        console.log(res.user);
      })
      .then(err => console.log(err));
  };
  const handleValidate = e => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Log in</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidate}
                  type="text"
                  placeholder="Type the captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                />
              </div>
              <p>
                Don't have account? please
                <Link to="/register" className="text-blue-600">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
