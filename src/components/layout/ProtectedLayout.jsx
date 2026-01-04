import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Header from "./Header";

function ProtectedLayout() {
    const { token } = useAuth();
    const localToken = localStorage.getItem("token")
    const location = useLocation();

    if(!token || !localToken) {
        return <Navigate to={"/login"} state={{"from": location}} replace></Navigate>;
    }

    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default ProtectedLayout;