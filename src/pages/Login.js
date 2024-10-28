import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../redux/slices/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
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
        dispatch(LoginUser(data));
    };
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="row justify-content-center w-100">
                <div className="col-md-6 col-lg-4">
                    <div className="card p-4 border-0 shadow" style={{ borderRadius: '10px' }}>
                        <h3 className="text-center mb-4">Login to Your Account</h3>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
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
                                Sign In
                            </button>

                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
