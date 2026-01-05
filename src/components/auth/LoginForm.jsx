import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/components/LoginForm.css'

function LoginForm() {
    const { name, email, password, errors, token, setName, setEmail, setPassword, setErrors, login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const result = login();

        if (result.success) {
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, { replace: true });
        }
    }
    return (
        <div className="form-outline mb-4">
            <div className="text-center">
                <h4>Welcome back</h4>
                <p>Sign in to your account</p>
            </div>
            <div className="">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" />

                    <label htmlFor="password">Password</label>
                    <input className="form-control mb-4" onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" />
                    <div className="text-center">

                    <button className="btn btn-primary btn-block mb-4" type="submit">Sign In</button>
                    <p>Don't have an account? <Link to={"/register"}>Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;