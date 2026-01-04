import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div>
            <div className="logo"></div>
            <Outlet />
        </div>
    )
}

export default AuthLayout;