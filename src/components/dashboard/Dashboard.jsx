import MonthlyBudgetWidget from "./MonthlyBudgetWidget";
import RecentExpenses from "./RecentExpenses";
import StatsCards from "./StatsCards";

function Dashboard() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h1>Dashboard</h1>
            <p>Overview of your budget and expenses</p>
            <div className="d-flex align-items-center flex-column justify-content-center">
            <MonthlyBudgetWidget></MonthlyBudgetWidget>
            <StatsCards></StatsCards>
            <RecentExpenses></RecentExpenses>
            </div>
        </div>
    )
}

export default Dashboard;