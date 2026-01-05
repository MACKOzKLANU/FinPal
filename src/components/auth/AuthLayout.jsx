import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="container">
            <div className="box ">
                <div className="d-flex flex-row justify-content-center align-items-center mb-3">
                    <div className="logo"></div>
                    <h1 className="color-logo ms-2">FinPal</h1>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;