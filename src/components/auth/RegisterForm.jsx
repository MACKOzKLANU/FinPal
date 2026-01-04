import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const {name, email, password, errors, token, setName, setEmail, setPassword, setErrors, signUp} = useAuth();
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = signUp(confirmPassword);

        if(result.success) {
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, {replace: true});
        }
    }
    return (
        <div>
            <h4>Create an account</h4>
            <p>Enter your details to get started</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id="" />

                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" />

                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" name="" id="" />

                    <button type="submit">Create Account</button>
                    <p>Already have an account? <a href="">Sign in</a></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;