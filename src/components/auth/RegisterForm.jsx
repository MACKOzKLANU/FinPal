import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
    const { name, email, password, errors, token, setName, setEmail, setPassword, setErrors, signUp } = useAuth();
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = signUp(confirmPassword);

        if (result.success) {
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from, { replace: true });
        }
    }
    return (
        <div className="form-outline mb-4">
            <div className="text-center">
                <h4>Create an account</h4>
                <p>Enter your details to get started</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input className="form-control" onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id="" />

                    <label htmlFor="email">Email</label>
                    <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" />

                    <label htmlFor="password">Password</label>
                    <input className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form-control mb-4" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" name="" id="" />
                    <div className="text-center">

                        <button className="btn btn-primary btn-block mb-4" type="submit">Create Account</button>

                        <p>Already have an account? <Link to={"/login"}>Sign in</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default RegisterForm;