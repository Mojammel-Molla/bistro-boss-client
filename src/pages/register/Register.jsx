import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
      })
      .then(err => {
        console.log(err);
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register</title>
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register('name', { required: true, maxLength: 20 })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register('email', { required: true })}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/,
                  })}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'pattern' && (
                  <span className="text-red-600">Your password is weak</span>
                )}
                {errors.password && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
              </div>

              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <p>
                Already have account? please
                <Link to="/login" className="text-blue-600">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
