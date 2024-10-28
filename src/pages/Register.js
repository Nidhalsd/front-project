import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../redux/slices/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const { isAuth } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(RegisterUser(data));
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="row justify-content-center w-100">
                <div className="col-md-6 col-lg-4">
                    <div className="card p-4 border-0 shadow" style={{ borderRadius: '10px' }}>
                        <h3 className="text-center mb-4">Create Your Account</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    placeholder="Enter your name"
                                    style={{ borderRadius: '5px' }}
                                    {...register("name", { required: true, maxLength: 20 })}
                                />
                                {errors.name && <div className="invalid-feedback">Name is required and should be less than 20 characters</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    placeholder="Enter your email"
                                    style={{ borderRadius: '5px' }}
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <div className="invalid-feedback">Email is required</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    placeholder="Enter your password"
                                    style={{ borderRadius: '5px' }}
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <div className="invalid-feedback">Password is required</div>}
                            </div>
                            <button type="submit" className="btn btn-dark w-100 btn-lg" style={{ borderRadius: '5px' }}>
                                Sign Up
                            </button>
                            <div className="d-flex justify-content-center mt-3">
                                <Link to="/login" className="text-decoration-none">Already have an account? Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
