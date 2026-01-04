import { useAuth } from "../../contexts/AuthContext";

function Header() {
    const { name } = useAuth();
    return (
        <div>
            <div>
                <div className="logo"></div>
                <h4>FinPal</h4>
                <p>Welcome, {name}</p>
            </div>
            <div>
                <p>Dashboard</p>
                <p>Add Expense</p>
                <p>Charts</p>
            </div>
        </div>
    )
}

export default Header;