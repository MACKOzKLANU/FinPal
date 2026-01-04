import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import '../../styles/components/LoginForm.css'

function LoginForm() {
    const {name, email, password, errors, token, setName, setEmail, setPassword, setErrors, login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const result = login();

        if(result.success) {
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, {replace: true});
        }
    }
    return (
        <div className="">
            <h4>Welcome back</h4>
            <p>Sign in to your account</p>
            <div className="">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" />

                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" />

                    <button type="submit">Sign In</button>
                    <p>Don't have an account? <a href="">Sign up</a></p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;