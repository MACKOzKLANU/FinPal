import { createContext, useCallback, useContext, useState } from 'react'
import { validatePassword } from '../utils/authHelpers';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    const [token, setToken] = useState(localStorage.getItem('token') || null)

    const signUp = useCallback((confirmPassword) => {
        const validationResult = validatePassword(password, confirmPassword);

        if (validationResult.ok) {
            console.log("Password is valid, continue signup...");
            setToken("mock-jwt-token-123");
            localStorage.setItem("token", "mock-jwt-token-123");
            return {success: true};

        }
        else {
            setErrors(validationResult.errors)
            validationResult.errors.map((error) => (
                console.log(error)
            ))
            return {success: false};

        }
    }, [password]);

    const login = useCallback(() => {
        if(1 == 1) {
            return {success: true};

        }
        else {
            setErrors(["Invalid login or password"]);
            validationResult.errors.map((error) => (
                console.log(error)
            ))
        }
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
    }, []);

    const value = {
        // state
        name,
        email,
        password,
        errors,
        token,

        // state functions
        setName,
        setEmail,
        setPassword,
        setErrors,

        //functions
        signUp,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}


