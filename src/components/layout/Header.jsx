import { Link } from "react-router-dom";
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
                <Link to={"/"}>Dashboard</Link>
                <Link to={"/add-expense"}>Add Expense</Link>
                <Link to={"/charts"}>Charts</Link>
            </div>
        </div>
    )
}

export default Header;