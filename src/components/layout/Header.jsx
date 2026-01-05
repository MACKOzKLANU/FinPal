import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
    const { name } = useAuth();
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div className="">
                    <div className="logo navbar-brand"></div>
                    <h4>FinPal</h4>
                    <p>Welcome, {name ? name : "John"}</p>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to={"/"} class="nav-link active" aria-current="page" href="#">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/add-expense"} class="nav-link" href="#">Add Expense</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/charts"} class="nav-link" href="#">Charts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;