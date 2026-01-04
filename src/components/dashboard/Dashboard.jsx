import MonthlyBudgetWidget from "./MonthlyBudgetWidget";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Overview of your budget and expenses</p>
            <MonthlyBudgetWidget></MonthlyBudgetWidget>
        </div>
    )
}

export default Dashboard;