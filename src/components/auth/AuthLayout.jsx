import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="container">
            <div className="box">
                <div className="display-horizontal">
                    <div className="logo"></div>
                    <h1 className="color-logo ml-10">FinPal</h1>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;